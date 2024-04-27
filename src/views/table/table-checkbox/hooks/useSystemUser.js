import {
  reactive,
  onBeforeMount,
  onMounted,
  toRefs,
  computed,
  watch,
} from "vue";
import { getCheckboxTable } from "@/api/table/checkbox";

export function useSystemUser(searchFormRef) {
  const state = reactive({
    searchOptions: [
      {
        label: "账号",
        type: "input",
        prop: "account",
        placeholder: "请输入账号",
      },
      {
        label: "IP",
        type: "input",
        prop: "ip",
        placeholder: "请输入IP",
      },
      {
        label: "操作类型",
        type: "select",
        prop: "type",
        placeholder: "请选择操作类型",
        options: [
          {
            label: "新增",
            value: 1,
          },
          {
            label: "修改",
            value: 2,
          },
          {
            label: "查询",
            value: 0,
          },
        ],
      },
      {
        label: "日志",
        type: "input",
        prop: "keyword",
        placeholder: "请输入日志关键字",
      },
      {
        label: "处置数量",
        type: "inputNumberRange",
        prop: "numberRange",
      },
      {
        label: "处置时间",
        type: "datetimeRangePicker",
        prop: "times",
      },
    ],
    initForm: {
      account: "",
      ip: "",
      type: "",
      keyword: "",
      numberRange: [],
      times: [],
    },
    tableOptions: {
      showPager: true,
      loading: false,
      filterabled: true,
      stripe: true,
      size: "mini",
      tablePage: {
        currentPage: 1,
        pageSize: 15,
        total: 0,
      },
    },
    tableData: [],
    columns: [
      { type: "checkbox", width: 50 },
      { type: "seq", title: "序号", width: 50 },
      { field: "account", title: "账号", width: 180 },
      { field: "ip", title: "IP", width: 150 },
      {
        field: "modelType",
        title: "模块类型",
        align: "center",
        width: 100,
        formatter: ({ cellValue }) => {
          const list = [
            { value: 1, label: "类型1" },
            { value: 2, label: "类型2" },
            { value: 3, label: "类型3" },
          ];
          const obj = list.find((item) => item.value === cellValue);
          return obj.label;
        },
      },
      {
        field: "operateType",
        title: "操作类型",
        align: "center",
        width: 100,
        slots: { default: "operateType" },
      },
      { field: "menu", title: "菜单", width: 120 },
      { field: "log", title: "日志", showOverflow: true },
      { field: "api", title: "API", showOverflow: true },
      {
        field: "times",
        title: "时长",
        width: 80,
        sortable: true,
      },
      { field: "date", title: "操作时间", width: 180 },
      {
        field: "operate",
        title: "操作",
        width: 80,
        fixed: "right",
        slots: { default: "operate" },
      },
    ],
    selectRecords: [],
    activeDetail: {},
    activePageName: "table",
  });

  async function getTableData() {
    state.tableOptions.loading = true;
    const data = {
      page: state.tableOptions.tablePage.currentPage,
      pageSize: state.tableOptions.tablePage.pageSize,
      ...state.searchForm,
    };
    try {
      const res = await getCheckboxTable(data);
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

  function search() {
    getTableData();
  }

  function reset() {
    searchFormRef.value.reset();
    getTableData();
  }

  function checkboxChange({ isAllChecked, selectRecords }) {
    console.log(isAllChecked, selectRecords);
    state.selectRecords = selectRecords;
  }

  function toDetail(row) {
    state.activeDetail = row;
    state.activePageName = "detail";
  }

  function goBack() {
    state.activePageName = "table";
  }

  function edit() {
    state.activePageName = "edit";
  }

  onBeforeMount(() => {
    getTableData();
  });

  onMounted(() => {});

  return {
    ...toRefs(state),
    search,
    reset,
    pageChange,
    checkboxChange,
    toDetail,
    goBack,
    edit,
  };
}
