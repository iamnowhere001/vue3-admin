<template>
  <div class="element-alert system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-alert title="success alert" type="success" />
      <el-alert title="info alert" type="info" />
      <el-alert title="warning alert" type="warning" />
      <el-alert title="error alert" type="error" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">主题</span>
      </template>
      <el-alert title="success alert" type="success" effect="dark" />
      <el-alert title="info alert" type="info" effect="dark" />
      <el-alert title="warning alert" type="warning" effect="dark" />
      <el-alert title="error alert" type="error" effect="dark" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义关闭按钮</span>
      </template>
      <el-alert title="unclosable alert" type="success" :closable="false" />
      <el-alert title="customized close-text" type="info" close-text="Gotcha" />
      <el-alert title="alert with callback" type="warning" @close="hello" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">使用图标</span>
      </template>
      <el-alert title="success alert" type="success" show-icon />
      <el-alert title="info alert" type="info" show-icon />
      <el-alert title="warning alert" type="warning" show-icon />
      <el-alert title="error alert" type="error" show-icon />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">文字居中</span>
      </template>
      <el-alert title="success alert" type="success" center show-icon />
      <el-alert title="info alert" type="info" center show-icon />
      <el-alert title="warning alert" type="warning" center show-icon />
      <el-alert title="error alert" type="error" center show-icon />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">文字描述</span>
      </template>
      <el-alert
        title="with description"
        type="success"
        description="This is a description."
      />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">带图标和描述</span>
      </template>
      <el-alert
        title="success alert"
        type="success"
        description="more text description"
        show-icon
      />
      <el-alert
        title="info alert"
        type="info"
        description="more text description"
        show-icon
      />
      <el-alert
        title="warning alert"
        type="warning"
        description="more text description"
        show-icon
      />
      <el-alert
        title="error alert"
        type="error"
        description="more text description"
        show-icon
      />
    </el-card>
  </div>
</template>

<script setup>
const hello = () => {
  // eslint-disable-next-line no-alert
  alert('Hello World!')
}
</script>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>

<style lang="scss" scoped>
.element-alert {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>