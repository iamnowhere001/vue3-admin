<template>
  <div class="element-buttons system-scrollbar">
    <el-card style="margin-bottom: 15px; margin-top: 10px">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <div>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="info">信息按钮</el-button>
        </div>
        <div style="margin-top: 10px">
          <el-button plain>默认按钮</el-button>
          <el-button type="primary" plain>主要按钮</el-button>
          <el-button type="success" plain>成功按钮</el-button>
          <el-button type="danger" plain>危险按钮</el-button>
          <el-button type="warning" plain>警告按钮</el-button>
          <el-button type="info" plain>信息按钮</el-button>
        </div>
        <div style="margin-top: 10px">
          <el-button plain>默认按钮</el-button>
          <el-button type="primary" round>主要按钮</el-button>
          <el-button type="success" round>成功按钮</el-button>
          <el-button type="danger" round>危险按钮</el-button>
          <el-button type="warning" round>警告按钮</el-button>
          <el-button type="info" round>信息按钮</el-button>
        </div>
        <div style="margin-top: 10px">
          <el-button :icon="Search" circle />
          <el-button type="primary" :icon="Edit" circle />
          <el-button type="success" :icon="Check" circle />
          <el-button type="warning" :icon="Star" circle />
          <el-button type="danger" :icon="Delete" circle />
          <el-button type="info" :icon="Message" circle />
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px; margin-top: 10px">
      <template #header>
        <span class="header-title">禁用状态</span>
      </template>
      <div>
        <div>
          <el-button disabled>默认按钮</el-button>
          <el-button type="primary" disabled>主要按钮</el-button>
          <el-button type="success" disabled>成功按钮</el-button>
          <el-button type="danger" disabled>危险按钮</el-button>
          <el-button type="warning" disabled>警告按钮</el-button>
          <el-button type="info" disabled>信息按钮</el-button>
        </div>
        <div style="margin-top: 10px">
          <el-button plain disabled>默认按钮</el-button>
          <el-button type="primary" plain disabled>主要按钮</el-button>
          <el-button type="success" plain disabled>成功按钮</el-button>
          <el-button type="danger" plain disabled>危险按钮</el-button>
          <el-button type="warning" plain disabled>警告按钮</el-button>
          <el-button type="info" plain disabled>信息按钮</el-button>
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px; margin-top: 10px">
      <template #header>
        <span class="header-title">链接按钮</span>
      </template>
      <div>
        <el-button link>默认链接</el-button>
        <el-button type="primary" link>主要链接</el-button>
        <el-button type="success" link>成功链接</el-button>
        <el-button type="danger" link>危险链接</el-button>
        <el-button type="warning" link>警告链接</el-button>
        <el-button type="info" link>信息链接</el-button>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px; margin-top: 10px">
      <template #header>
        <span class="header-title">文字按钮</span>
      </template>
      <div>
        <el-button text>默认文字</el-button>
        <el-button type="primary" text>主要文字</el-button>
        <el-button type="success" text>成功文字</el-button>
        <el-button type="danger" text>危险文字</el-button>
        <el-button type="warning" text>警告文字</el-button>
        <el-button type="info" text>信息文字</el-button>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px; margin-top: 10px">
      <template #header>
        <span class="header-title">图标按钮</span>
      </template>
      <div>
        <el-button type="primary" :icon="Edit" />
        <el-button type="primary" :icon="Share" />
        <el-button type="primary" :icon="Delete" />
        <el-button type="primary" :icon="Search">搜索</el-button>
        <el-button type="primary">
          上传<el-icon class="el-icon--right"><Upload /></el-icon>
        </el-button>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px; margin-top: 10px">
      <template #header>
        <span class="header-title">按钮组</span>
      </template>
      <div>
        <el-button-group>
          <el-button type="primary" :icon="ArrowLeft">上一页</el-button>
          <el-button type="primary">
            下一页<el-icon class="el-icon--right"><ArrowRight /></el-icon>
          </el-button>
        </el-button-group>

        <el-button-group class="ml-4">
          <el-button type="primary" :icon="Edit" />
          <el-button type="primary" :icon="Share" />
          <el-button type="primary" :icon="Delete" />
        </el-button-group>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px; margin-top: 10px">
      <template #header>
        <span class="header-title">加载中</span>
      </template>
      <div>
        <el-button type="primary" loading>加载中</el-button>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px; margin-top: 10px">
      <template #header>
        <span class="header-title">尺寸</span>
      </template>
      <div>
        <el-button type="primary" size="small">小</el-button>
        <el-button type="primary">默认</el-button>
        <el-button type="primary" size="large">大</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  Share,
  Upload,
  ArrowLeft,
  ArrowRight,
} from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.element-buttons {
  height: 100%;
  overflow-y: auto;
  .header-title {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
