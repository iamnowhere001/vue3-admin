
<template>
  <div class='date-time-picker system-scrollbar'>
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">日期和时间点</span>
      </template>
      <el-row>
        <el-col :span="8">
          <span class="label">默认</span>
          <el-date-picker v-model="form.date1"
                          type="datetime"
                          placeholder="选择日期时间" />
        </el-col>
        <el-col :span="8">
          <span class="label">带快捷键</span>
          <el-date-picker v-model="form.date2"
                          type="datetime"
                          placeholder="选择日期时间"
                          :shortcuts="shortcuts" />
        </el-col>
        <el-col :span="8">
          <span class="label">带默认日期时间</span>
          <el-date-picker v-model="form.date3"
                          type="datetime"
                          placeholder="选择日期时间"
                          :default-time="defaultTime" />
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">日期时间格式</span>
      </template>
      <el-row>
        <el-col :span="8">
          <div class="label">使用 format</div>
          <div class="label">日期时间格式: {{ form.date4 }}</div>
          <el-date-picker v-model="form.date4"
                          type="datetime"
                          placeholder="选择日期时间"
                          format="YYYY/MM/DD HH:mm:ss" />
        </el-col>
        <el-col :span="8">
          <div class="label">使用 value-format</div>
          <div class="label">日期时间格式: {{ form.date5 }}</div>
          <el-date-picker v-model="form.date5"
                          type="datetime"
                          placeholder="选择日期时间"
                          format="YYYY/MM/DD hh:mm:ss"
                          value-format="YYYY-MM-DD h:m:s a" />
        </el-col>
        <el-col :span="8">
          <div class="label">时间戳</div>
          <div class="label">日期时间格式：{{ form.date6 }}</div>
          <el-date-picker v-model="form.date6"
                          type="datetime"
                          placeholder="选择日期时间e"
                          format="YYYY/MM/DD hh:mm:ss"
                          value-format="x" />
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">日期和时间范围</span>
      </template>
      <el-row>
        <el-col :span="12">
          <span class="label">默认</span>
          <el-date-picker v-model="form.date7"
                          type="datetimerange"
                          range-separator="至"
                          start-placeholder="开始日期时间"
                          end-placeholder="结束日期时间" />
        </el-col>
        <el-col :span="12">
          <span class="label">带快捷键</span>
          <el-date-picker v-model="form.date8"
                          type="datetimerange"
                          :shortcuts="shortcuts2"
                          range-separator="至"
                          start-placeholder="开始日期时间"
                          end-placeholder="结束日期时间" />
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">默认的起始与结束时刻</span>
      </template>
      <el-row>
        <el-col :span="12">
          <div class="label">开始和结束时间：12:00:00</div>
          <el-date-picker v-model="form.date9"
                          type="datetimerange"
                          range-separator="至"
                          start-placeholder="开始日期时间"
                          end-placeholder="结束日期时间"
                          :default-time="defaultTime1" />
        </el-col>
        <el-col :span="12">
          <div class="label">开始时间 12:00:00, 结束时间 08:00:00</div>
          <el-date-picker v-model="form.date10"
                          type="datetimerange"
                          range-separator="至"
                          start-placeholder="开始日期时间"
                          end-placeholder="结束日期时间"
                          :default-time="defaultTime2" />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({
  date1: '',
  date2: '',
  date3: '',
  date4: '',
  date5: '',
  date6: '',
  date7: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
  date8: '',
  date9: '',
  date10: ''
})
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)
const defaultTime1 = new Date(2000, 1, 1, 12, 0, 0)
const defaultTime2 = [
  new Date(2000, 1, 1, 12, 0, 0),
  new Date(2000, 2, 1, 8, 0, 0)
]

const shortcuts = [
  {
    text: '今日',
    value: new Date()
  },
  {
    text: '昨日',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    }
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    }
  }
]
const shortcuts2 = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
</script>

<style lang="scss">
.date-time-picker {
  height: 100%;
  overflow-y: auto;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
  .label {
    line-height: 30px;
    padding-right: 10px;
  }
}
</style>
