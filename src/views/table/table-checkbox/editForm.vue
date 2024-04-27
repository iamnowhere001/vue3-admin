<template>
  <div class="edit-form-container">
    <p class="title line-decorate">新增</p>
    <div class="edit-form">
      <act-form
        ref="searchFormRef"
        :options="options"
        :labelWidth="120"
        :initForm="form"
        :buttonConfig="{
          show: true,
        }"
        @cancel="handleCancel"
        @submit="handleConfirm"
      ></act-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs } from "vue";
import ActForm from "@/components/ActForm/index";
import { ElMessage } from "element-plus";

const emits = defineEmits(["goBack"]);
const state = reactive({
  options: [
    {
      label: "地区",
      type: "cascader",
      prop: "area",
      url: "/mock/dictionary/area",
      props: {
        label: "name",
        value: "code",
      },
      rules: [{ required: true, message: "请选择地区", trigger: "change" }],
    },
    {
      label: "账号",
      type: "input",
      prop: "account",
      placeholder: "请输入账号",
      rules: [{ required: true, message: "账号不能为空", trigger: "blur" }],
    },
    {
      label: "次数",
      type: "numberInput",
      prop: "count",
      placeholder: "请输入次数",
      rules: [{ required: true, message: "输入次数不能为空", trigger: "blur" }],
    },
    {
      label: "IP",
      type: "input",
      prop: "ip",
      placeholder: "请输入IP",
      rules: [{ required: true, message: "IP不能为空", trigger: "blur" }],
    },
    {
      label: "操作类型",
      type: "select",
      prop: "type",
      placeholder: "请选择操作类型",
      url: "/mock/dictionary/operateType",
    },
    {
      label: "日志",
      type: "input",
      prop: "keyword",
      placeholder: "请输入日志关键字",
    },
  ],
  form: {
    area: [],
    account: "",
    count: null,
    ip: "",
    type: "",
    keyword: "",
    numberRange: [],
  },
});

function handleCancel() {
  emits("goBack");
}

function handleConfirm() {
  console.log(state.form);
  ElMessage.success("保存成功");
  emits("goBack");
}

const { options, form } = toRefs(state);
</script>

<style lang="scss" scoped>
.edit-form-container {
  .title {
    font-size: 18px;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 15px;
  }
  .edit-form {
    width: 70%;
    margin: 0 auto;
  }
}
</style>
