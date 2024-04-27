<template>
  <div class="element-text system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <el-text class="mx-1">Default</el-text>
        <el-text class="mx-1" type="primary">Primary</el-text>
        <el-text class="mx-1" type="success">Success</el-text>
        <el-text class="mx-1" type="info">Info</el-text>
        <el-text class="mx-1" type="warning">Warning</el-text>
        <el-text class="mx-1" type="danger">Danger</el-text>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">尺寸</span>
      </template>
      <div>
        <el-text class="mx-1" size="large">Large</el-text>
        <el-text class="mx-1">Default</el-text>
        <el-text class="mx-1" size="small">Small</el-text>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">省略</span>
      </template>
      <div>
        <el-text class="w-100px" truncated>Self element set width 100px</el-text>
        <el-row>
          <el-col :span="3">
            <el-text truncated>Squeezed by parent element</el-text>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">覆盖</span>
      </template>
      <div>
        <el-space direction="vertical">
          <el-text>span</el-text>
          <el-text tag="p">This is a paragraph.</el-text>
          <el-text tag="b">Bold</el-text>
          <el-text tag="i">Italic</el-text>
          <el-text>
            This is
            <el-text tag="sub" size="small">subscript</el-text>
          </el-text>
          <el-text>
            This is
            <el-text tag="sup" size="small">superscript</el-text>
          </el-text>
          <el-text tag="ins">Inserted</el-text>
          <el-text tag="del">Deleted</el-text>
          <el-text tag="mark">Marked</el-text>
        </el-space>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">混合使用</span>
      </template>
      <div>
        <el-space direction="vertical">
          <el-text>
            <el-icon>
              <ElementPlus />
            </el-icon>
            Element-Plus
          </el-text>
          <el-row>
            <el-text>Rate</el-text>
            <el-rate class="ml-1" />
          </el-row>
          <el-text>
            This is text mixed icon
            <el-icon>
              <Bell />
            </el-icon>
            and component
            <el-button>Button</el-button>
          </el-text>
        </el-space>
      </div>
    </el-card>    
  </div>
</template>

<script setup>
import { Bell, ElementPlus } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.element-text {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 16px;
    font-weight: 500;
  }
  .mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .w-100px {
    width: 100px;
  }
}
</style>