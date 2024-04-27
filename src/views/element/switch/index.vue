<template>
  <div class="element-switch system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <el-switch v-model="value1" size="large"/>
        <el-switch
          v-model="value2"
          size="large"
          class="ml-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949;"
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">尺寸</span>
      </template>
      <div>
        <el-switch
          v-model="value"
          size="large"
          active-text="打开"
          inactive-text="关闭"
        />
        <br />
        <el-switch v-model="value" active-text="打开" inactive-text="关闭" />
        <br />
        <el-switch
          v-model="value"
          size="small"
          active-text="打开"
          inactive-text="关闭"
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">尺寸</span>
      </template>
      <div>
        <el-switch
          v-model="value3"
          class="mb-2"
          size="large"
          active-text="按月支付"
          inactive-text="按年支付"
        />
        <br />
        <el-switch
          v-model="value8"
          size="large"
          class="mb-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          active-text="按月支付"
          inactive-text="按年支付"
        />
        <br />
        <el-switch
          v-model="value7"
          inline-prompt
          size="large"
          active-text="是"
          inactive-text="否"
        />
        <el-switch
          v-model="value4"
          class="ml-2"
          inline-prompt
          size="large"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          active-text="Y"
          inactive-text="N"
        />
        <el-switch
          v-model="value6"
          size="large"
          class="ml-2"
          width="60"
          inline-prompt
          active-text="超出省略"
          inactive-text="超出省略"
        />
        <el-switch
          v-model="value5"
          class="ml-2"
          size="large"
          inline-prompt
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          active-text="完整展示多个内容"
          inactive-text="多个内容"
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">显示自定义图标</span>
      </template>
      <div>
        <el-switch v-model="value9" size="large" :active-icon="Check" :inactive-icon="Close" />
        <br />
        <el-switch
          v-model="value10"
          class="mt-2"
          style="margin-left: 24px"
          size="large"
          inline-prompt
          :active-icon="Check"
          :inactive-icon="Close"
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">扩展的 value 类型</span>
      </template>
      <div>
        <el-tooltip :content="'开关的值: ' + value11" placement="top">
          <el-switch
            size="large"
            v-model="value11"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-value="100"
            inactive-value="0"
          />
        </el-tooltip>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">禁用状态</span>
      </template>
      <div>
        <el-switch size="large" v-model="value12" disabled />
        <el-switch size="large" v-model="value13" class="ml-2" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">加载状态</span>
      </template>
      <div>
        <el-switch size="large" v-model="value14" loading />
        <el-switch size="large" v-model="value15" loading class="ml-2" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">阻止切换</span>
      </template>
      <div>
        <el-switch
          size="large"
          v-model="value16"
          :loading="loading1"
          :before-change="beforeChange1"
        />
        <el-switch
          size="large"
          v-model="value17"
          class="ml-2"
          :loading="loading2"
          :before-change="beforeChange2"
        />
      </div>
    </el-card>    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Check, Close } from '@element-plus/icons-vue'

const value = ref(true)

const value1 = ref(true)
const value2 = ref(true)

const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)
const value6 = ref(true)
const value7 = ref(true)
const value8 = ref(true)

const value9 = ref(true)
const value10 = ref(true)

const value11 = ref('100')

const value12 = ref(true)
const value13 = ref(true)

const value14 = ref(true)
const value15 = ref(false)

const value16 = ref(false)
const value17 = ref(false)
const loading1 = ref(false)
const loading2 = ref(false)

const beforeChange1 = () => {
  loading1.value = true
  return new Promise((resolve) => {
    setTimeout(() => {
      loading1.value = false
      ElMessage.success('切换开关成功!')
      return resolve(true)
    }, 1000)
  })
}

const beforeChange2 = () => {
  loading2.value = true
  return new Promise((_, reject) => {
    setTimeout(() => {
      loading2.value = false
      ElMessage.error('切换开关失败!')
      return reject(new Error('Error'))
    }, 1000)
  })
}
</script>

<style lang="scss" scoped>
.element-switch {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 16px;
    font-weight: 500;
  }
  .ml-2 {
    margin-left: 20px;
  }
  .mb-2 {
    margin-bottom: 20px;
  }
}
</style>