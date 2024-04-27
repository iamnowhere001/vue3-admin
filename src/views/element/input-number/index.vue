<template>
  <div class="element-inputnumber system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">禁用状态</span>
      </template>
      <div>
        <el-input-number v-model="num1" :disabled="true" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">步进</span>
      </template>
      <div>
        <el-input-number v-model="num2" :step="2" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">严格步进</span>
      </template>
      <div>
        <el-input-number v-model="num3" :step="2" step-strictly />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">精度</span>
      </template>
      <div>
        <el-input-number v-model="num4" :precision="2" :step="0.1" :max="10" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">不同的输入框尺寸</span>
      </template>
      <div>
        <el-input-number v-model="num5" size="large" />
        <el-input-number v-model="num6" class="mx-4" />
        <el-input-number v-model="num7" size="small" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">按钮位置</span>
      </template>
      <div>
        <el-input-number
          v-model="num8"
          :min="1"
          :max="10"
          controls-position="right"
          size="large"
          @change="handleChange1"
        />
        <el-input-number
          v-model="num8"
          class="mx-4"
          :min="1"
          :max="10"
          controls-position="right"
          @change="handleChange1"
        />
        <el-input-number
          v-model="num8"
          :min="1"
          :max="10"
          size="small"
          controls-position="right"
          @change="handleChange1"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

//#region 基础用法
const num = ref(1)
const handleChange = (value) => {
  console.log(value)
}
//#endregion

//#region 禁用状态
const num1 = ref(1)
//#endregion

//#region 步进
const num2 = ref(5)
//#endregion

//#region 严格步进
const num3 = ref(2)
//#endregion

//#region 精度
const num4 = ref(1)
//#endregion

//#region 不同的输入框尺寸
const num5 = ref(1)
const num6 = ref(2)
const num7 = ref(3)
//#endregion

//#region 按钮位置
const num8 = ref(1)
const handleChange1 = (value) => {
  console.log(value)
}
//#endregion
</script>

<style lang="scss" scoped>
.element-inputnumber {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
  .mx-4 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>