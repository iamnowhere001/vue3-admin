<template>
  <div class="element-radio system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <el-radio-group v-model="radio1">
          <el-radio label="1" size="large">备选项</el-radio>
          <el-radio label="2" size="large">备选项</el-radio>
        </el-radio-group>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">禁用状态</span>
      </template>
      <div>
        <el-radio-group v-model="radio2" disabled>
          <el-radio label="1" size="large">备选项</el-radio>
          <el-radio label="2" size="large">备选项</el-radio>
          <el-radio label="3" size="large" disabled>备选项</el-radio>
        </el-radio-group>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">单选框组</span>
      </template>
      <div>
        <el-radio-group v-model="radio3">
          <el-radio :label="3" size="large">备选项</el-radio>
          <el-radio :label="6" size="large">备选项</el-radio>
          <el-radio :label="9" size="large">备选项</el-radio>
          <el-radio :label="13" size="large" disabled>备选项</el-radio>
          <el-radio :label="29" size="large" disabled>备选项</el-radio>          
        </el-radio-group>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">按钮样式</span>
      </template>
      <div>
        <el-radio-group v-model="radio4" size="large">
          <el-radio-button label="上海" />
          <el-radio-button label="北京" />
          <el-radio-button label="深圳" />
          <el-radio-button label="武汉" />
          <el-radio-button label="广州" disabled/>
        </el-radio-group>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">带有边框</span>
      </template>
      <div>
        <el-radio-group v-model="radio5">
          <el-radio label="1" size="large" border>上海</el-radio>
          <el-radio label="2" size="large" border>北京</el-radio>
          <el-radio label="3" size="large" border>深圳</el-radio>
          <el-radio label="4" size="large" border>武汉</el-radio>
          <el-radio label="4" size="large" disabled border>天津</el-radio>
        </el-radio-group>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref(3)
const radio4 = ref('武汉')
const radio5 = ref('1')
</script>

<style lang="scss" scoped>
.element-radio {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>