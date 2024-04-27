import {
  reactive,
  onBeforeMount,
  onMounted,
  toRefs,
  computed,
  shallowRef,
} from "vue";
import { getTable } from "@/api/table/base";
import { ElMessage } from "element-plus";
import { addDialog } from "@/components/ActDialog/index";
import dialogForm from "../dialogForm.vue";

export function useBaseTable(searchFormRef, editFormRef) {
  const state = reactive({
    searchOptions: [
      {
        label: "姓名",
        type: "input",
        prop: "name",
        placeholder: "请输入姓名",
        permission: "form-name",
      },
      {
        label: "账号类型",
        type: "select",
        prop: "type",
        placeholder: "请选择账号类型",
        options: [
          { value: 1, label: "普通" },
          { value: 2, label: "VIP" },
          { value: 3, label: "SVIP" },
        ],
      },
      {
        label: "状态",
        type: "select",
        prop: "status",
        placeholder: "请选择状态",
        options: [
          { value: 1, label: "未接收" },
          { value: 2, label: "已暂停" },
          { value: 3, label: "已停止" },
          { value: 4, label: "已成功" },
          { value: 5, label: "未知" },
        ],
      },
      {
        label: "评分",
        type: "inputNumberRange",
        prop: "rate",
      },
      {
        label: "创建时间",
        type: "datetimeRangePicker",
        prop: "times",
      },
    ],
    searchForm: {
      name: "",
      type: "",
      status: "",
      rate: null,
      times: [],
    },
    tableOptions: {
      showPager: true,
      loading: false,
      filterabled: false,
      stripe: true,
      tablePage: {
        currentPage: 1,
        pageSize: 15,
        total: 0,
      },
    },
    columns: [
      { type: "seq", title: "序号", width: 50 },
      { field: "name", title: "姓名", permission: "table-name" },
      {
        field: "avatar",
        title: "头像",
        width: 100,
        slots: { default: "avatar" },
      },
      { field: "description", title: "描述", width: 240 },
      {
        field: "type",
        title: "账号类型",
        align: "center",
        formatter: ({ cellValue }) => {
          const list = [
            { value: 1, label: "普通" },
            { value: 2, label: "VIP" },
            { value: 3, label: "SVIP" },
          ];
          const obj = list.find((item) => item.value === cellValue);
          return obj.label;
        },
      },
      {
        field: "status",
        title: "状态",
        align: "center",
        slots: { default: "status" },
      },
      {
        field: "rate",
        title: "评分",
        sortable: true,
        slots: { default: "rate" },
      },
      { field: "date", title: "创建时间", width: 180 },
      {
        field: "operate",
        title: "操作",
        width: 150,
        fixed: "right",
        slots: { default: "operate" },
      },
    ],
    tableData: [],
    isAdd: true,
    dialogVisible: false,
    activeRow: {},
    detailDialogVisible: false,
    detailOptions: [
      {
        label: "姓名",
        prop: "name",
      },
      {
        label: "描述",
        prop: "description",
      },
      {
        label: "账号类型",
        prop: "type",
      },
      {
        label: "状态",
        prop: "status",
      },
      {
        label: "评分",
        prop: "rate",
      },
    ],
  });

  const dialogTitle = computed(() => {
    return state.isAdd ? "新增" : "编辑";
  });

  onBeforeMount(() => {
    getTableData();
  });

  onMounted(() => {});

  function search() {
    getTableData();
  }

  function reset() {
    searchFormRef.value.reset();
    getTableData();
  }

  async function getTableData() {
    state.tableOptions.loading = true;
    const data = {
      page: state.tableOptions.tablePage.currentPage,
      pageSize: state.tableOptions.tablePage.pageSize,
      ...state.searchForm,
    };
    try {
      const res = await getTable(data);
      state.tableData = res.data.list;
      state.tableOptions.tablePage.total = res.data.page.total;
    } catch (error) {
    } finally {
      state.tableOptions.loading = false;
    }
  }

  function pageChange({ currentPage, pageSize }) {
    // 分页操作
    state.tableOptions.tablePage.currentPage = currentPage;
    state.tableOptions.tablePage.pageSize = pageSize;
    getTableData();
  }

  function showDetail(row) {
    state.activeRow = row;
    state.detailDialogVisible = true;
  }

  function editDetail(row) {
    state.isAdd = false;
    state.activeRow = row;
    state.dialogVisible = true;
  }

  function addDetail() {
    state.isAdd = true;
    state.dialogVisible = true;
  }

  function confirm() {
    editFormRef.value.confirm(() => {
      if (state.isAdd) {
        ElMessage.success("新增成功");
      } else {
        ElMessage.success("修改成功");
      }
      state.dialogVisible = false;
    });
  }

  function dialogClose() {
    editFormRef.value.reset();
    state.activeRow = {};
  }

  function openActDialog() {
    addDialog({
      title: "新增",
      width: "500px",
      props: {
        data: {},
      },
      component: shallowRef(dialogForm),
      callBack: (data) => {
        if (data.success) {
          ElMessage.success(data.message);
        }
      },
    });
  }

  function updateDetail(row) {
    addDialog({
      title: "修改",
      width: "500px",
      props: {
        data: row,
        isAdd: false,
      },
      component: shallowRef(dialogForm),
      callBack: (data) => {
        if (data?.success) {
          ElMessage.success(data.message);
        }
      },
    });
  }

  return {
    ...toRefs(state),
    search,
    reset,
    pageChange,
    showDetail,
    editDetail,
    addDetail,
    dialogTitle,
    confirm,
    dialogClose,
    openActDialog,
    updateDetail,
  };
}
