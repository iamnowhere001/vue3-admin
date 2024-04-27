import { reactive, toRefs } from 'vue'

const statusList = [
  { label: '状态1', value: '1' },
  { label: '状态2', value: '2' },
  { label: '状态3', value: '3' },
  { label: '状态4', value: '4' }
]
const typeList = [
  { label: '类型1', value: '1' },
  { label: '类型2', value: '2' },
  { label: '类型3', value: '3' },
  { label: '类型4', value: '4' }
]
const type2List = [
  { label: '类型1', value: '1' },
  { label: '类型2', value: '2' },
  { label: '类型3', value: '3' },
  { label: '类型4', value: '4' }
]
export function useFormBase () {
  const state = reactive({
    labelPosition: 'right',
    form: initForm(),
    options: [
      {
        label: "名称",
        type: "input",
        prop: "name",
        placeholder: "请输入名称",
      },
      {
        label: "状态",
        type: "select",
        prop: "status",
        placeholder: "请选择状态",
        options: statusList
      }, {
        label: "日期",
        type: "datePicker",
        prop: "date",
        placeholder: "请选择日期",
      },
      {
        label: "开关",
        type: "switch",
        prop: "switch",
      },
      {
        label: "多选类型",
        type: "checkbox",
        prop: "type",
        options: typeList
      },
      {
        label: "单选类型",
        type: "radio",
        prop: "type2",
        options: type2List
      },
      {
        label: "描述",
        type: "textarea",
        prop: "desc"
      },
    ]
  })
  // 表单初始化
  function initForm () {
    return {
      name: '',
      status: '1',
      date: '',
      switch: false,
      type: ['1', '3'],
      type2: '1',
      desc: '描述'
    }
  }

  return {
    ...toRefs(state)
  }
}