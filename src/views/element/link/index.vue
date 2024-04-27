<template>
  <div class="element-link system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <el-link href="https://element-plus.org" target="_blank">default</el-link>
        <el-link type="primary">primary</el-link>
        <el-link type="success">success</el-link>
        <el-link type="warning">warning</el-link>
        <el-link type="danger">danger</el-link>
        <el-link type="info">info</el-link>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">禁用状态</span>
      </template>
      <div>
        <el-link disabled>default</el-link>
        <el-link type="primary" disabled>primary</el-link>
        <el-link type="success" disabled>success</el-link>
        <el-link type="warning" disabled>warning</el-link>
        <el-link type="danger" disabled>danger</el-link>
        <el-link type="info" disabled>info</el-link>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">下划线</span>
      </template>
      <div>
        <el-link :underline="false">没有下划线</el-link>
        <el-link>拥有下划线</el-link>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">图标</span>
      </template>
      <div>
        <el-link :icon="Edit">编辑</el-link>
        <el-link>
          验证<el-icon class="el-icon--right"><icon-view /></el-icon>
        </el-link>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { Edit, View as IconView } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.element-link {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 16px;
    font-weight: 500;
  }
  .el-link {
    margin-right: 8px;
    .el-icon--right.el-icon {
      vertical-align: text-bottom;
    }
  }
}
</style>