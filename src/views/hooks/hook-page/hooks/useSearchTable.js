import { reactive, onBeforeMount, onMounted, toRefs } from "vue";

export function useSearchTable() {
  const state = reactive({
    searchForm: {
      name: "",
      type: "",
      status: "",
      rate: null,
      times: [],
    },
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
  });

  return {
    ...toRefs(state),
  };
}
