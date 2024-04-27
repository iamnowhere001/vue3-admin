<template>
  <div class="element-progress system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">直线进度条</span>
      </template>
      <div class="demo-progress">
        <el-progress :percentage="50" />
        <el-progress :percentage="100" :format="format" />
        <el-progress :percentage="100" status="success" />
        <el-progress :percentage="100" status="warning" />
        <el-progress :percentage="50" status="exception" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">直线进度条</span>
      </template>
      <div class="demo-progress">
        <el-progress :text-inside="true" :stroke-width="26" :percentage="70" />
        <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="100"
          status="success"
        />
        <el-progress
          :text-inside="true"
          :stroke-width="22"
          :percentage="80"
          status="warning"
        />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="50"
          status="exception"
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">直线进度条</span>
      </template>
      <div class="demo-progress">
        <el-progress :percentage="percentage" :color="customColor" />
        <el-progress :percentage="percentage" :color="customColorMethod" />
        <el-progress :percentage="percentage" :color="customColors" />
        <el-progress :percentage="percentage" :color="customColors" />
        <div>
          <el-button-group>
            <el-button :icon="Minus" @click="decrease" />
            <el-button :icon="Plus" @click="increase" />
          </el-button-group>
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">环形进度条</span>
      </template>
      <div class="demo-progress">
        <el-progress type="circle" :percentage="0" />
        <el-progress type="circle" :percentage="25" />
        <el-progress type="circle" :percentage="100" status="success" />
        <el-progress type="circle" :percentage="70" status="warning" />
        <el-progress type="circle" :percentage="50" status="exception" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">仪表盘形进度条</span>
      </template>
      <div class="demo-progress">
        <el-progress type="dashboard" :percentage="percentage1" :color="colors" />
        <el-progress type="dashboard" :percentage="percentage2" :color="colors" />
        <div>
          <el-button-group>
            <el-button :icon="Minus" @click="decrease1" />
            <el-button :icon="Plus" @click="increase1" />
          </el-button-group>
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义内容</span>
      </template>
      <div class="demo-progress">
        <el-progress :percentage="50">
          <el-button text>Content</el-button>
        </el-progress>
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="50"
          status="exception"
        >
          <span>Content</span>
        </el-progress>
        <el-progress type="circle" :percentage="100" status="success">
          <el-button type="success" :icon="Check" circle />
        </el-progress>
        <el-progress type="dashboard" :percentage="80">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">Progressing</span>
          </template>
        </el-progress>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">动画进度条</span>
      </template>
      <div class="demo-progress">
        <el-progress :percentage="50" :indeterminate="true" />
        <el-progress :percentage="100" :format="format" :indeterminate="true" />
        <el-progress
          :percentage="100"
          status="success"
          :indeterminate="true"
          :duration="5"
        />
        <el-progress
          :percentage="100"
          status="warning"
          :indeterminate="true"
          :duration="1"
        />
        <el-progress :percentage="50" status="exception" :indeterminate="true" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">条纹进度条</span>
      </template>
      <div class="demo-progress">
        <el-progress :percentage="50" :stroke-width="15" striped />
        <el-progress
          :percentage="30"
          :stroke-width="15"
          status="warning"
          striped
          striped-flow
        />
        <el-progress
          :percentage="100"
          :stroke-width="15"
          status="success"
          striped
          striped-flow
          :duration="10"
        />
        <el-progress
          :percentage="percentage3"
          :stroke-width="15"
          status="exception"
          striped
          striped-flow
          :duration="duration"
        />
        <el-button-group>
          <el-button :icon="Minus" @click="decrease2" />
          <el-button :icon="Plus" @click="increase2" />
        </el-button-group>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { Minus, Plus, Check } from '@element-plus/icons-vue'

//#region 直线进度条
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
//#endregion

//#region 自定义进度条的颜色
const percentage = ref(20)
const customColor = ref('#409eff')

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const customColorMethod = (percentage) => {
  if (percentage < 30) {
    return '#909399'
  }
  if (percentage < 70) {
    return '#e6a23c'
  }
  return '#67c23a'
}
const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
//#endregion

//#region  仪表盘形进度条
const percentage1 = ref(10)
const percentage2 = ref(0)

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const increase1 = () => {
  percentage1.value += 10
  if (percentage1.value > 100) {
    percentage1.value = 100
  }
}
const decrease1 = () => {
  percentage1.value -= 10
  if (percentage1.value < 0) {
    percentage1.value = 0
  }
}
onMounted(() => {
  setInterval(() => {
    percentage2.value = (percentage2.value % 100) + 10
  }, 500)
})
//#endregion

//#region 动画进度条
const percentage3 = ref(70)
const duration = computed(() => Math.floor(percentage3.value / 10))

const increase2 = () => {
  percentage3.value += 10
  if (percentage3.value > 100) {
    percentage3.value = 100
  }
}
const decrease2 = () => {
  percentage3.value -= 10
  if (percentage3.value < 0) {
    percentage3.value = 0
  }
}
//#endregion
</script>

<style scoped lang="scss">
.element-progress {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
  .demo-progress .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
  }
  .demo-progress .el-progress--circle {
    margin-right: 15px;
  }
  .percentage-value {
    display: block;
    margin-top: 10px;
    font-size: 28px;
  }
  .percentage-label {
    display: block;
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>