import { reactive, onBeforeMount, toRefs } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

/**
 *
 * @param {*} searchForm:搜索条件
 * @param {*} searchRef:搜索框组件
 * @param {*} searchFormFmt:搜索结果转换函数
 * @param {*} getTableDataFn:列表数据请求接口
 * @param {*} resultFmt:列表结果转换函数，不传tableData默认接收res.data
 * @param {*} editFormRef:新增、修改表单
 * @param {*} deleteRowFn:删除记录
 * @returns
 */
export function usePage(
  { searchForm, searchRef, searchFormFmt },
  { getTableDataFn, resultFmt, deleteRowFn },
  { editFormRef }
) {
  const state = reactive({
    tableData: [],
    tableOptions: {
      showPager: true,
      loading: false,
      tablePage: {
        currentPage: 1,
        pageSize: 15,
        total: 0,
      },
    },
    dialogVisible: false,
    dialogTitle: "新增",
    isAdd: true,
    activeRow: {},
    dialogDetailVisible: false,
  });

  //重置搜索条件
  function reset() {
    if (searchRef) {
      searchRef.value.reset();
      loadData();
    }
  }

  //获取表格数据
  async function loadData() {
    state.tableOptions.loading = true;
    try {
      let data = {
        baseEntity: {
          current: state.tableOptions.tablePage.currentPage,
          pageSize: state.tableOptions.tablePage.pageSize,
        },
        ...searchForm,
      };
      if (searchFormFmt) {
        data = searchFormFmt(data);
      }
      const res = await getTableDataFn(data);
      if (res.code === 200) {
        state.tableData = resultFmt ? resultFmt(res) : [...res.data];
        state.tableOptions.tablePage.total = res.data.page.total;
      }
    } catch (error) {
      console.log("获取列表失败：", error);
    } finally {
      state.tableOptions.loading = false;
    }
  }

  //分页功能
  function pageChange({ currentPage, pageSize }) {
    state.tableOptions.tablePage.currentPage = currentPage;
    state.tableOptions.tablePage.pageSize = pageSize;
    loadData();
  }

  //新增
  function addRow() {
    state.dialogVisible = true;
    state.isAdd = true;
    state.dialogTitle = "新增";
  }

  //修改
  function editRow(row) {
    state.dialogVisible = true;
    state.isAdd = false;
    state.dialogTitle = "修改";
    state.activeRow = row;
  }

  //保存
  function confirmRow() {
    editFormRef.value.confirm(() => {
      if (state.isAdd) {
        ElMessage.success("新增成功");
      } else {
        ElMessage.success("修改成功");
      }
      loadData();
      state.dialogVisible = false;
    });
  }

  //删除
  function deleteRow(row) {
    ElMessageBox.confirm("是否删除?", "提示", {
      confirmButtonText: "是",
      cancelButtonText: "否",
      buttonSize: "default",
      type: "warning",
    })
      .then(async () => {
        if (deleteRowFn) {
          const res = await deleteRowFn(row.id);
          if (res.code === 200) {
            ElMessage({
              type: "success",
              message: "删除成功",
            });
          }
        }
      })
      .catch(() => {
        console.log("取消删除");
      });
  }

  //关闭弹框
  function dialogClose() {
    editFormRef.value.reset();
    state.activeRow = {};
  }

  //打开详情
  function showDetail(row) {
    state.dialogDetailVisible = true;
    state.activeRow = row;
  }

  onBeforeMount(() => {
    loadData();
  });

  return {
    ...toRefs(state),
    pageChange,
    reset,
    loadData,
    addRow,
    editRow,
    dialogClose,
    confirmRow,
    deleteRow,
    showDetail,
  };
}
