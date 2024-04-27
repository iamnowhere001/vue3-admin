<template>
  <act-detail :options="options" :labelWidth="80" :detail="data">
    <template #status>
      <act-tag
        :value="data.status"
        :mapping="[
          { value: 1, label: '未接收' },
          { value: 2, label: '已暂停', type: 'warning' },
          { value: 3, label: '已停止', type: 'danger' },
          { value: 4, label: '已成功', type: 'success' },
          {
            value: 5,
            label: '未知',
            color: '#E5F8F4',
            round: true,
          },
        ]"
      ></act-tag>
    </template>
    <template #type>
      <span
        v-fmt="{
          value: data.type,
          mapping: [
            { value: 1, label: '普通' },
            { value: 2, label: 'VIP' },
            { value: 3, label: 'SVIP' },
          ],
        }"
      ></span>
    </template>
    <template #rate> <el-rate v-model="data.rate" disabled /></template>
  </act-detail>
</template>

<script setup>
import { reactive } from "vue";
import ActDetail from "@/components/ActDetail";
import ActTag from "@/components/ActTag/index";

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
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
        trigger: "blur",
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
        trigger: "blur",
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
</script>
