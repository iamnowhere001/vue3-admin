<template>
  <div class="element-transfer system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <el-transfer v-model="value" :data="data"/>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">可搜索过滤</span>
      </template>
      <div>
        <el-transfer
          v-model="value1"
          filterable
          :filter-method="filterMethod"
          filter-placeholder="国家缩写"
          :data="data1"
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义</span>
      </template>
      <div>
        <p style="text-align: center; margin: 0 0 20px">
          使用渲染内容自定义数据项
        </p>
        <div style="text-align: center">
          <el-transfer
            v-model="leftValue"
            style="text-align: left; display: inline-block"
            filterable
            :left-default-checked="[2, 3]"
            :right-default-checked="[1]"
            :render-content="renderFunc"
            :titles="['来源', '目标']"
            :button-texts="['向左', '向右']"
            :format="{
              noChecked: '${total}',
              hasChecked: '${checked}/${total}',
            }"
            :data="data2"
            @change="handleChange"
          >
            <template #left-footer>
              <el-button class="transfer-footer" size="small">操作</el-button>
            </template>
            <template #right-footer>
              <el-button class="transfer-footer" size="small">操作</el-button>
            </template>
          </el-transfer>
          <p style="text-align: center; margin: 50px 0 20px">
            使用作用域插槽自定义数据项
          </p>
          <el-transfer
            v-model="rightValue"
            style="text-align: left; display: inline-block"
            filterable
            :left-default-checked="[2, 3]"
            :right-default-checked="[1]"
            :titles="['来源', '目标']"
            :button-texts="['向左', '向右']"
            :format="{
              noChecked: '${total}',
              hasChecked: '${checked}/${total}',
            }"
            :data="data2"
            @change="handleChange"
          >
            <template #default="{ option }">
              <span>{{ option.key }} - {{ option.label }}</span>
            </template>
            <template #left-footer>
              <el-button class="transfer-footer" size="small">操作</el-button>
            </template>
            <template #right-footer>
              <el-button class="transfer-footer" size="small">操作</el-button>
            </template>
          </el-transfer>
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">数据项属性别名</span>
      </template>
      <div>
        <el-transfer
          v-model="value4"
          :props="{
            key: 'value',
            label: 'desc',
          }"
          :data="data4"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

//#region  基础用法
const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `备选项 ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref(generateData())
const value = ref([])
//#endregion

//#region  可搜索过滤
const generateData1 = () => {
  const data = []
  const states = [
    'California',
    'Illinois',
    'Maryland',
    'Texas',
    'Florida',
    'Colorado',
    'Connecticut ',
  ]
  const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT']
  states.forEach((city, index) => {
    data.push({
      label: city,
      key: index,
      initial: initials[index],
    })
  })
  return data
}

const data1 = ref(generateData1())
const value1 = ref([])

const filterMethod = (query, item) => {
  return item.initial.toLowerCase().includes(query.toLowerCase())
}
//#endregion

//#region  自定义
const generateData3 = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `备选项 ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data2 = ref(generateData3())
const rightValue = ref([1])
const leftValue = ref([1])

const renderFunc = (
  h,
  option
) => {
  return h('span', null, option.label)
}
const handleChange = (
  value,
  direction,
  movedKeys
) => {
  console.log(value, direction, movedKeys)
}
//#endregion

//#region 数据项属性别名
const generateData4 = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      value: i,
      desc: `备选项 ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data4 = ref(generateData4())
const value4 = ref([])
//#endregion
</script>

<style lang="scss" scoped>
.element-transfer {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
  .transfer-footer {
    margin-left: 15px;
    padding: 6px 5px;
  }
}
</style>