<template>
  <div class="element-checkbox system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <el-checkbox v-model="checkbox1" label="1" size="large">备选项</el-checkbox>
        <el-checkbox v-model="checkbox1" label="2" size="large">备选项</el-checkbox>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">禁用状态</span>
      </template>
      <div>
        <el-checkbox v-model="checkbox2" label="1" size="large">备选项</el-checkbox>
        <el-checkbox v-model="checkbox2" label="2" size="large" disabled>备选项</el-checkbox>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">多选框组</span>
      </template>
      <div>
        <el-checkbox-group v-model="checkbox3">
          <el-checkbox label="3" size="large">备选项</el-checkbox>
          <el-checkbox label="6" size="large">备选项</el-checkbox>
          <el-checkbox label="9" size="large">备选项</el-checkbox>
          <el-checkbox label="1" size="large" disabled>备选项</el-checkbox>
          <el-checkbox label="4" size="large" disabled>备选项</el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">中间状态</span>
      </template>
      <div>
        <el-checkbox size="large"
          v-model="checkAll"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange"
          >选择全部</el-checkbox
        >
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox size="large" v-for="city in cities" :key="city" :label="city">{{
            city
          }}</el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">可选项目数量的限制</span>
      </template>
      <div>
        <el-checkbox-group size="large" v-model="checkedCities1" :min="1" :max="2">
          <el-checkbox v-for="city in cities" :key="city" :label="city">{{
            city
          }}</el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">按钮样式</span>
      </template>
      <div>
        <el-checkbox-group v-model="checkbox4">
          <el-checkbox-button label="上海" size="large" />
          <el-checkbox-button label="北京" size="large" />
          <el-checkbox-button label="深圳" size="large" />
          <el-checkbox-button label="武汉" size="large" />
          <el-checkbox-button label="南京" disabled size="large" />
          <el-checkbox-button label="杭州" disabled size="large" />
        </el-checkbox-group>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">带有边框</span>
      </template>
      <div>
        <el-checkbox v-model="checkbox5" label="备选项" size="large" border />
        <el-checkbox v-model="checkbox6" label="备选项" size="large" border />
        <el-checkbox v-model="checkbox7" label="备选项" size="large" border disabled />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checkbox1 = ref(true)
const checkbox2 = ref(true)
const checkbox3 = ref(['4', '1', '3'])
const checkbox4 = ref(['上海', '武汉', '杭州'])
const checkbox5 = ref(true)
const checkbox6 = ref(false)
const checkbox7 = ref(true)

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['上海', '北京'])
const cities = ['上海', '北京', '深圳', '武汉']

const checkedCities1 = ref(['上海', '武汉'])

const handleCheckAllChange = (val) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}

const handleCheckedCitiesChange = (value) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}
</script>

<style lang="scss" scoped>
.element-checkbox {
  height: 100%;
  overflow-y: auto;
  .header-title {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>