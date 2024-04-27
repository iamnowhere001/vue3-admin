import { getTable, deleteRowData } from "@/api/table/base";
import { usePage } from "@/hooks/usePage";
import { useSearchTable } from "./useSearchTable";

export function useHookPage(searchFormRef, editFormRef) {
  const { searchForm, searchOptions, columns } = useSearchTable();

  const {
    tableData,
    tableOptions,
    pageChange,
    reset,
    loadData,
    dialogVisible,
    dialogTitle,
    dialogClose,
    isAdd,
    confirmRow,
    addRow,
    editRow,
    activeRow,
    deleteRow,
    dialogDetailVisible,
    showDetail,
  } = usePage(
    {
      //搜索条件
      searchForm: searchForm.value,
      searchRef: searchFormRef,
      searchFormFmt: createSearchForm,
    },
    {
      //表格
      getTableDataFn: getTable,
      resultFmt,
      deleteRowFn: deleteRowData,
    },
    {
      //新增、修改
      editFormRef,
    }
  );

  //搜索条件转换
  function createSearchForm(form) {
    let data = form;
    if (data.times.length > 0) {
      data.startTime = data.times[0];
      data.endTime = data.times[1];
    }
    return data;
  }

  //查询结果转换
  function resultFmt(res) {
    return res.data.list;
  }

  return {
    searchForm,
    searchOptions,
    columns,
    tableData,
    tableOptions,
    pageChange,
    reset,
    loadData,
    dialogVisible,
    dialogTitle,
    dialogClose,
    isAdd,
    confirmRow,
    addRow,
    editRow,
    activeRow,
    deleteRow,
    dialogDetailVisible,
    showDetail,
  };
}
