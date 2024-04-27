<template>
  <div class="element-notification system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-button plain @click="open1">自动关闭</el-button>
      <el-button plain @click="open2">不会自动关闭</el-button>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">不同类型的通知</span>
      </template>
      <el-button plain @click="open3"> Success </el-button>
      <el-button plain @click="open4"> Warning </el-button>
      <el-button plain @click="open5"> Info </el-button>
      <el-button plain @click="open6"> Error </el-button>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义消息弹出的位置</span>
      </template>
      <el-button plain @click="open7"> Top Right </el-button>
      <el-button plain @click="open8"> Bottom Right </el-button>
      <el-button plain @click="open9"> Bottom Left </el-button>
      <el-button plain @click="open10"> Top Left </el-button>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">有位置偏移的通知栏</span>
      </template>
      <el-button plain @click="open">带有偏移量的通知</el-button>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">使用 HTML 片段作为正文内容</span>
      </template>
      <el-button plain @click="open11">使用HTML字符串</el-button>
    </el-card>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { ElNotification } from 'element-plus'

//#region 基础用法
const open1 = () => {
  ElNotification({
    title: '标题',
    message: h('i', { style: 'color: teal' }, '这是一个提醒'),
  })
}

const open2 = () => {
  ElNotification({
    title: '提示',
    message: '这是一条不会自动关闭的消息',
    duration: 0,
  })
}
//#endregion

//#region 不同类型的通知
const open3 = () => {
  ElNotification({
    title: 'Success',
    message: '这是一条成功的信息',
    type: 'success',
  })
}

const open4 = () => {
  ElNotification({
    title: 'Warning',
    message: '这是一条警告信息',
    type: 'warning',
  })
}

const open5 = () => {
  ElNotification({
    title: 'Info',
    message: '这是一条普通消息',
    type: 'info',
  })
}

const open6 = () => {
  ElNotification({
    title: 'Error',
    message: '这是一条错误信息',
    type: 'error',
  })
}
//#endregion

//#region 自定义消息弹出的位置
const open7 = () => {
  ElNotification({
    title: '自定义位置',
    message: "我在右上角",
  })
}

const open8 = () => {
  ElNotification({
    title: '自定义位置',
    message: "我在右下角",
    position: 'bottom-right',
  })
}

const open9 = () => {
  ElNotification({
    title: '自定义位置',
    message: "我在左下角",
    position: 'bottom-left',
  })
}

const open10 = () => {
  ElNotification({
    title: '自定义位置',
    message: "我在左上角",
    position: 'top-left',
  })
}
//#endregion

//#region 有位置偏移的通知栏
const open = () => {
  ElNotification.success({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
  })
}
//#endregion

//#region 使用 HTML 片段作为正文内容
const open11 = () => {
  ElNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
//#endregion
</script>

<style lang="scss" scoped>
.element-notification {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>