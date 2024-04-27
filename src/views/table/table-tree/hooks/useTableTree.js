
import { reactive, toRefs, ref, watch } from "vue"

const statusList = [
  { label: '审核失败', value: '1' },
  { label: '待审核', value: '2' },
  { label: '待履行', value: '3' },
  { label: '审核成功', value: '4' },
  { label: '已完成', value: '5' },
]
const typeList = [
  { label: '主合同', value: '1' },
  { label: '子合同', value: '2' },
  { label: '补充合同', value: '3' }
]
export function useTableTree () {
  const state = reactive({
    filterText: '',
    data: [{
      id: 1,
      label: '深圳总部',
      children: [{
        id: 4,
        label: '总办',
        children: [],
      }, {
        id: 4,
        label: '市场部',
        children: [{
          id: 9,
          label: '采购1组',
        }, {
          id: 10,
          label: '采购2组',
        }],
      }, {
        id: 4,
        label: '技术部',
        children: [],
      }],
    }, {
      id: 2,
      label: '北京总部',
      children: [{
        id: 4,
        label: '总办',
        children: [],
      }, {
        id: 4,
        label: '市场部',
        children: [{
          id: 9,
          label: '采购1组',
        }, {
          id: 10,
          label: '采购2组',
        }],
      },],
    }, {
      id: 3,
      label: '上海总部',
      children: [{
        id: 4,
        label: '市场部',
        children: [],
      }, {
        id: 4,
        label: '财务部',
        children: [{
          id: 9,
          label: '财务1组',
        }, {
          id: 10,
          label: '财务2组',
        }],
      },],
    }, {
      id: 4,
      label: '湖南',
      children: [],
    }, {
      id: 5,
      label: '湖北',
      children: [],
    }],
    defaultProps: {
      children: 'children',
      label: 'label',
    },
    form: initForm(),
    options: [{
      label: "合同名称",
      type: "input",
      prop: "name",
      placeholder: "请输入合同名称",
    },
    {
      label: "合同状态",
      type: "select",
      prop: "status",
      placeholder: "请选组合同状态",
      options: statusList
    }, {
      label: "合同编号",
      type: "input",
      prop: "code",
      placeholder: "请输入合同编号",
    },
    {
      label: "合同类型",
      type: "select",
      prop: "type",
      placeholder: "请选择合同类型",
      options: typeList
    }],
    tableData: [
      { name: '合同1', status: '1', code: '1', type: '1', type2: '11', money: '100万' },
      { name: '合同2', status: '2', code: '2', type: '2', type2: '1', money: '100万' },
      { name: '合同3', status: '3', code: '3', type: '3', type2: '1', money: '100万' },
      { name: '合同4', status: '4', code: '4', type: '1', type2: '1', money: '100万' }
    ],
    columns: [
      { type: 'seq', title: '序号', width: 50 },
      { field: 'name', title: '合同名称', align: 'center' },
      {
        field: 'status', title: '合同状态', align: 'center',
        formatter: ({ cellValue }) => {
          const obj = statusList.find((item) => item.value === cellValue)
          return obj.label
        }
      },
      { field: 'code', title: '合同编号', align: 'center' },
      {
        field: 'type', title: '合同类型', align: 'center',
        formatter: ({ cellValue }) => {
          const obj = typeList.find((item) => item.value === cellValue)
          return obj.label
        }
      },
      { field: 'type2', title: '合同收付类型', align: 'center' },
      { field: 'money', title: '合同金额', align: 'center' },
      { title: '操作', align: 'center', slots: { default: 'operate' } },
    ],
    tableOptions: {
      showPager: true,
      loading: false,
      tablePage: {
        currentPage: 1,
        pageSize: 15,
        total: 0,
      }
    }
  })

  function filterNode (value, data) {
    if (!value) return true
    return data.label.includes(value)
  }

  function initForm () {
    return {
      code: '',
      name: '',
      status: '',
      type: ''
    }
  }
  // 搜索
  function searchTree () {
    if (state.filterText) {
      state.data = state.data.filter(item => item.label.includes(state.filterText))
    }
  }
  // 搜索
  function search () {
    state.tableOptions.tablePage.currentPage = 1
    // 接口
    // getList()
  }
  // 重置
  function reset () {
    state.form = initForm()
    // 接口
    // getList()
  }
  // 新增
  function handleAdd (id) {

  }
  // 修改
  function handleEdit (id) {

  }
  // 删除数据
  function handleDelete (id) {
    ElMessageBox.confirm('确认删除数据？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      buttonSize: 'default',
    }).then(() => {
      // 调用接口处理
    })
  }
  // 分页操作
  function pageChange ({ currentPage, pageSize }) {
    state.tableOptions.tablePage.currentPage = currentPage
    state.tableOptions.tablePage.pageSize = pageSize
    // 接口
    // getList()
  }

  return {
    ...toRefs(state),
    filterNode,
    searchTree,
    search,
    reset,
    handleAdd,
    handleEdit,
    handleDelete,
    pageChange
  }
}
