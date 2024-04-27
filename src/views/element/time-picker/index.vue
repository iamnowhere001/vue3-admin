
<template>
  <div class='time-picker system-scrollbar'>
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">任意时间点</span>
      </template>
      <el-time-picker v-model="form.time1"
                      placeholder="任意时间" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">限制时间选择范围</span>
      </template>
      <el-time-picker v-model="form.time2"
                      :disabled-hours="disabledHours"
                      :disabled-minutes="disabledMinutes"
                      :disabled-seconds="disabledSeconds"
                      placeholder="限制时间选择范围" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">任意时间范围</span>
      </template>
      <el-time-picker v-model="form.time3"
                      is-range
                      range-separator="至"
                      start-placeholder="开始时间"
                      end-placeholder="结束时间" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">固定时间点</span>
      </template>
      <el-time-select v-model="form.time4"
                      start="08:30"
                      step="00:15"
                      end="18:30"
                      placeholder="选择时间" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">时间格式</span>
      </template>
      <el-time-select v-model="form.time5"
                      start="00:00"
                      step="00:30"
                      end="23:59"
                      placeholder="选择时间"
                      format="hh:mm A" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">固定时间范围</span>
      </template>
      <el-time-select v-model="form.startTime"
                      :max-time="form.endTime"
                      class="mr-4"
                      placeholder="开始时间"
                      start="08:30"
                      step="00:15"
                      end="18:30" />
      <el-time-select v-model="form.endTime"
                      :min-time="form.startTime"
                      placeholder="结束时间"
                      start="08:30"
                      step="00:15"
                      end="18:30" />
    </el-card>

  </div>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({
  time1: '',
  time2: new Date(2022, 9, 10, 18, 30),
  time3: [new Date(2022, 9, 10, 8, 40), new Date(2022, 9, 10, 9, 40)],
  time4: '',
  time5: '',
  startTime: '',
  endTime: ''
})

const makeRange = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}
const disabledHours = () => {
  return makeRange(0, 16).concat(makeRange(19, 23))
}
const disabledMinutes = (hour) => {
  if (hour === 17) {
    return makeRange(0, 29)
  }
  if (hour === 18) {
    return makeRange(31, 59)
  }
}
const disabledSeconds = (hour, minute) => {
  if (hour === 18 && minute === 30) {
    return makeRange(1, 59)
  }
}
</script>

<style lang="scss">
.time-picker {
  height: 100%;
  overflow-y: auto;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>
