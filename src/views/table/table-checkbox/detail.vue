<template>
  <div class="detail">
    <el-page-header @back="goBack" :icon="ArrowLeft">
      <template #content>
        <span> 详情 </span>
      </template>
    </el-page-header>
    <div class="detail-content">
      <el-descriptions title="用户信息" :column="2" :border="true">
        <el-descriptions-item label="账号">{{
          data.account
        }}</el-descriptions-item>
        <el-descriptions-item label="IP">{{ data.ip }}</el-descriptions-item>
        <el-descriptions-item label="模块类型">
          <span
            v-fmt="{
              value: data.modelType,
              mapping: [
                { value: 1, label: '类型1' },
                { value: 2, label: '类型2' },
                { value: 3, label: '类型3' },
              ],
            }"
          ></span
        ></el-descriptions-item>
        <el-descriptions-item label="操作类型">
          <act-tag
            :value="data.operateType"
            :mapping="[
              { value: 1, label: '类型1' },
              { value: 2, label: '类型2', type: 'warning' },
              { value: 3, label: '类型3', type: 'danger' },
              {
                value: 4,
                label: '类型4',
                color: '#E5F8F4',
                round: true,
              },
              { value: 5, label: '类型5', type: 'success' },
            ]"
          ></act-tag>
        </el-descriptions-item>
        <el-descriptions-item label="菜单">
          {{ data.menu }}
        </el-descriptions-item>
        <el-descriptions-item label="日志" min-width="200">{{
          data.log
        }}</el-descriptions-item>
        <el-descriptions-item label="API">
          {{ data.api }}
        </el-descriptions-item>
        <el-descriptions-item label="时长">
          {{ data.times }}
        </el-descriptions-item>
        <el-descriptions-item label="操作时间">
          {{ data.date }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft } from "@element-plus/icons-vue";
import ActTag from "@/components/ActTag/index";

const emits = defineEmits(["goBack"]);
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

function goBack() {
  emits("goBack");
}
</script>

<style lang="scss" scoped>
.detail {
  &-content {
    margin-top: 10px;
    padding: 20px;
  }
}
</style>
