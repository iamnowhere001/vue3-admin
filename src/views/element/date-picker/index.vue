
<template>
  <div class='date-picker system-scrollbar'>
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">选择某一天</span>
      </template>
      <el-row>
        <el-col :span="12">
          <el-date-picker v-model="form.date1"
                          type="date"
                          placeholder="选择日期" />
        </el-col>
        <el-col :span="12">
          <el-date-picker v-model="form.date2"
                          type="date"
                          placeholder="选择日期"
                          :disabled-date="disabledDate"
                          :shortcuts="shortcuts" />
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">其他日期单位</span>
      </template>
      <el-row :gutter="20">
        <el-col :span="6">
          <span class="label">星期：</span>
          <el-date-picker v-model="form.date3"
                          type="week"
                          format="[周] ww"
                          placeholder="选择一周" />
        </el-col>
        <el-col :span="6">
          <span class="label">月份：</span>
          <el-date-picker v-model="form.date4"
                          type="month"
                          placeholder="选择一月" />
        </el-col>
        <el-col :span="6">
          <span class="label">年份：</span>
          <el-date-picker v-model="form.date5"
                          type="year"
                          placeholder="选择一年" />
        </el-col>
        <el-col :span="6">
          <span class="label">日期：</span>
          <el-date-picker v-model="form.date6"
                          type="dates"
                          placeholder="选择一个或多个日期" />
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">选择一段时间</span>
      </template>
      <el-row>
        <el-col :span="12">
          <span class="label">默认：</span>
          <el-date-picker v-model="form.date7"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期" />
        </el-col>
        <el-col :span="12">
          <span class="label">带快捷键：</span>
          <el-date-picker v-model="form.date8"
                          type="daterange"
                          unlink-panels
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          :shortcuts="shortcuts2" />
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">选择月份范围</span>
      </template>
      <el-row>
        <el-col :span="12">
          <span class="label">默认</span>
          <el-date-picker v-model="form.date9"
                          type="monthrange"
                          range-separator="至"
                          start-placeholder="开始月份"
                          end-placeholder="结束月份" />
        </el-col>
        <el-col :span="12">
          <span class="label">带快捷键：</span>
          <el-date-picker v-model="form.date10"
                          type="monthrange"
                          unlink-panels
                          range-separator="至"
                          start-placeholder="开始月份"
                          end-placeholder="结束月份"
                          :shortcuts="shortcuts3" />
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">默认值</span>
      </template>
      <el-row>
        <el-col :span="12">
          <span class="label">默认</span>
          <el-date-picker v-model="form.date11"
                          type="date"
                          placeholder="选择日期"
                          :default-value="new Date(2020, 9, 1)" />
        </el-col>
        <el-col :span="12">
          <span class="label">一段时间：</span>
          <el-date-picker v-model="form.date12"
                          type="daterange"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          :default-value="[new Date(2020, 9, 1), new Date(2020, 10, 1)]" />
        </el-col>
      </el-row>
    </el-card>

    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">日期格式</span>
      </template>
      <el-row>
        <el-col :span="8">
          <div class="label">使用format</div>
          <div class="label">日期格式: {{ form.date13 }}</div>
          <el-date-picker v-model="form.date13"
                          type="date"
                          placeholder="选择日期"
                          format="YYYY/MM/DD" />
        </el-col>
        <el-col :span="8">
          <div class="label">使用 value-format</div>
          <div class="label">日期格式：{{ form.date14 }}</div>
          <el-date-picker v-model="form.date14"
                          type="date"
                          placeholder="选择日期"
                          format="YYYY/MM/DD"
                          value-format="YYYY-MM-DD" />
        </el-col>
        <el-col :span="8">
          <div class="label">时间戳</div>
          <div class="label">日期格式：{{ form.date15 }}</div>
          <el-date-picker v-model="form.date15"
                          type="date"
                          placeholder="选择日期"
                          format="YYYY/MM/DD"
                          value-format="x" />
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">默认显示日期</span>
      </template>
      <div class="label">分量值：{{ form.date16 }}</div>
      <el-date-picker v-model="form.date16"
                      type="daterange"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :default-time="form.date16DefaultTime" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>设置自定义前缀的内容</template>
      <div class="label">设置前缀图标</div>
      <el-date-picker v-model="form.date17"
                      type="date"
                      placeholder="选择日期"
                      :prefix-icon="customPrefix" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义内容</span>
      </template>
      <el-date-picker v-model="form.date18"
                      type="date"
                      placeholder="选择日期"
                      format="YYYY/MM/DD"
                      value-format="YYYY-MM-DD">
        <template #default="cell">
          <div class="cell"
               :class="{ current: cell.isCurrent }">
            <span class="text">{{ cell.text }}</span>
            <span v-if="isHoliday(cell)"
                  class="holiday" />
          </div>
        </template>
      </el-date-picker>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, shallowRef, h } from 'vue'
const form = reactive({
  date1: '',
  date2: '',
  date3: '',
  date4: '',
  date5: '',
  date6: '',
  date7: '',
  date8: '',
  date9: '',
  date10: '',
  date11: '',
  date12: '',
  date13: '',
  date14: '',
  date15: '',
  date16: '',
  date16DefaultTime: [
    new Date(2000, 1, 1, 0, 0, 0),
    new Date(2000, 2, 1, 23, 59, 59)
  ],
  date17: '',
  date18: '2021-10-29'
})

const customPrefix = shallowRef({
  render() {
    return h('p', 'pre')
  }
})

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

const disabledDate = (time) => {
  return time.getTime() > Date.now()
}

const shortcuts2 = [
  {
    text: '上周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: '上月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: '最近3个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]

const shortcuts3 = [
  {
    text: '本月',
    value: [new Date(), new Date()]
  },
  {
    text: '今年',
    value: () => {
      const end = new Date()
      const start = new Date(new Date().getFullYear(), 0)
      return [start, end]
    }
  },
  {
    text: '最近6个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setMonth(start.getMonth() - 6)
      return [start, end]
    }
  }
]

const holidays = [
  '2021-10-01',
  '2021-10-02',
  '2021-10-03',
  '2021-10-04',
  '2021-10-05',
  '2021-10-06',
  '2021-10-07'
]

const isHoliday = ({ dayjs }) => {
  return holidays.includes(dayjs.format('YYYY-MM-DD'))
}
</script>

<style lang="scss">
.date-picker {
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
