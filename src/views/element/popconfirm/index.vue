<template>
  <div class="element-popconfirm system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-popconfirm title="你确定要删除这个吗?">
        <template #reference>
          <el-button>删除</el-button>
        </template>
      </el-popconfirm>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义弹出框的内容</span>
      </template>
      <el-popconfirm
        width="220"
        confirm-button-text="确定"
        cancel-button-text="不,谢谢！"
        :icon="InfoFilled"
        icon-color="#626AEF"
        title="你确定要删除这个吗?"
      >
        <template #reference>
          <el-button>删除</el-button>
        </template>
      </el-popconfirm>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">多种让 Popconfirm 出现的方法</span>
      </template>
      <el-popconfirm
        confirm-button-text="Yes"
        cancel-button-text="No"
        :icon="InfoFilled"
        icon-color="#626AEF"
        title="你确定要删除这个吗?"
        @confirm="confirmEvent"
        @cancel="cancelEvent"
      >
        <template #reference>
          <el-button>删除</el-button>
        </template>
      </el-popconfirm>
    </el-card>
  </div>
</template>

<script setup>
import { InfoFilled } from '@element-plus/icons-vue'

const confirmEvent = () => {
  console.log('confirm!')
}
const cancelEvent = () => {
  console.log('cancel!')
}
</script>

<style lang="scss" scoped>
.element-popconfirm {
  height: 100%;
  overflow-y: auto;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>