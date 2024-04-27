<template>
  <div class="element-slider system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <div class="slider-demo-block">
          <span class="demonstration">缺省值</span>
          <el-slider v-model="value1" />
        </div>
        <div class="slider-demo-block">
          <span class="demonstration">自定义初始值</span>
          <el-slider v-model="value2" />
        </div>
        <div class="slider-demo-block">
          <span class="demonstration">隐藏提示信息</span>
          <el-slider v-model="value3" :show-tooltip="false" />
        </div>
        <div class="slider-demo-block">
          <span class="demonstration">提示信息格式</span>
          <el-slider v-model="value4" :format-tooltip="formatTooltip" />
        </div>
        <div class="slider-demo-block">
          <span class="demonstration">禁用</span>
          <el-slider v-model="value5" disabled />
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">离散值</span>
      </template>
      <div>
        <div class="slider-demo-block">
          <span class="demonstration">未显示断点</span>
          <el-slider v-model="value6" :step="10" />
        </div>
        <div class="slider-demo-block">
          <span class="demonstration">显示断点</span>
          <el-slider v-model="value7" :step="10" show-stops />
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">带有输入框的滑块</span>
      </template>
      <div>
        <div class="slider-demo-block">
          <el-slider v-model="value8" show-input />
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">不同尺寸</span>
      </template>
      <div>
        <el-slider v-model="value9" show-input size="large" style="margin-bottom: 20px;"/>
        <el-slider v-model="value9" show-input style="margin-bottom: 20px;"/>
        <el-slider v-model="value9" show-input size="small" style="margin-bottom: 20px;"/>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">提示信息位置</span>
      </template>
      <div>
        <div class="slider-demo-block">
          <el-slider v-model="value10" />
        </div>
        <div class="slider-demo-block">
          <el-slider v-model="value11" placement="bottom" />
        </div>
        <div class="slider-demo-block">
          <el-slider v-model="value12" placement="right" />
        </div>
        <div class="slider-demo-block">
          <el-slider v-model="value13" placement="left" />
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">范围选择</span>
      </template>
      <div>
        <el-slider v-model="value14" range show-stops :max="10" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">垂直模式</span>
      </template>
      <div>
        <el-slider v-model="value15" vertical height="200px" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">显示标记</span>
      </template>
      <div>
        <el-slider v-model="value16" range :marks="marks" />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
const value5 = ref(0)

const value6 = ref(0)
const value7 = ref(0)

const value8 = ref(0)

const value9 = ref(0)

const value10 = ref(0)
const value11 = ref(0)
const value12 = ref(0)
const value13 = ref(0)

const value14 = ref([4, 8])

const value15 = ref(0)

const value16 = ref([30, 60])

const marks = reactive({
  0: '0°C',
  8: '8°C',
  37: '37°C',
  50: {
    style: {
      color: '#1989FA',
    },
    label: '50%',
  },
})

const formatTooltip = (val) => {
  return val / 100
}
</script>

<style lang="scss" scoped>
.element-slider {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 16px;
    font-weight: 500;
  }
  .slider-demo-block {
    display: flex;
    align-items: center;
    .el-slider {
      margin-top: 0;
      margin-left: 12px;
    }
    .demonstration {
      font-size: 14px;
      color: var(--el-text-color-secondary);
      line-height: 44px;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0;
    }
    .demonstration + .el-slider {
      flex: 0 0 70%;
    }
  }
}
</style>