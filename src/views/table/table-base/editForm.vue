<template>
  <act-form
    ref="formRef"
    :options="options"
    :labelWidth="80"
    :initForm="form"
  ></act-form>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import ActForm from "@/components/ActForm/index";

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
  isAdd: {
    type: Boolean,
    default: true,
  },
});
const formRef = ref(null);
const form = reactive({
  name: "",
  type: "",
  status: "",
  rate: null,
});
const options = reactive([
  {
    label: "姓名",
    type: "input",
    prop: "name",
    placeholder: "请输入姓名",
    rules: [
      {
        required: true,
        message: "名称不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 5,
        message: "名称长度在2到5之间",
        trigger: "blur",
      },
    ],
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
    rules: [
      {
        required: true,
        message: "账号类型不能为空",
        trigger: "change",
      },
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
      {
        value: 5,
        label: "未知",
      },
    ],
    rules: [
      {
        required: true,
        message: "状态不能为空",
        trigger: "change",
      },
    ],
  },
  {
    label: "评分",
    type: "numberInput",
    prop: "rate",
    placeholder: "请输入评分",
    rules: [
      {
        required: true,
        message: "评分不能为空",
        trigger: "blur",
      },
      {
        min: 1,
        max: 5,
        type: "number",
        message: "评分在1到5之间",
        trigger: "blur",
      },
    ],
  },
]);

watch(
  () => props.data,
  (obj) => {
    for (const key in form) {
      if (obj[key]) {
        form[key] = obj[key];
      }
    }
  },
  {
    immediate: true,
  }
);

function confirm(fn) {
  formRef.value.submit(fn);
}

function reset() {
  formRef.value.reset();
}

defineExpose({ confirm, reset });
</script>
