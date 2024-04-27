<template>
  <div class="element-rate system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <div class="demo-rate-block">
          <span class="demonstration">默认模式</span>
          <el-rate v-model="value1" size="large"/>
        </div>
        <div class="demo-rate-block">
          <span class="demonstration">不同级别的颜色</span>
          <el-rate v-model="value2" :colors="colors"  size="large"/>
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">尺寸</span>
      </template>
      <div>
        <el-rate v-model="value3" size="large" />
        <br />
        <el-rate v-model="value3" />
        <br />
        <el-rate v-model="value3" size="small" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">允许半选</span>
      </template>
      <div>
        <el-rate v-model="value4" allow-half />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">辅助文字</span>
      </template>
      <div>
        <el-rate
          v-model="value5"
          :texts="['糟糕', '失望', '普通', '良好', '很棒']"
          show-text
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">可清空</span>
      </template>
      <div>
        <el-rate
          v-model="value6"
          :texts="['糟糕', '失望', '普通', '良好', '很棒']"
          show-text
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">可清空</span>
      </template>
      <div>
        <el-rate v-model="value6" clearable />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">更多种类的图标</span>
      </template>
      <div>
        <el-rate
          v-model="value7"
          :icons="icons"
          :void-icon="ChatRound"
          :colors="['#409eff', '#67c23a', '#FF9900']"
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">只读</span>
      </template>
      <div>
        <el-rate
          v-model="value8"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value} points"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChatDotRound, ChatLineRound, ChatRound } from '@element-plus/icons-vue'

const value1 = ref(null)
const value2 = ref(null)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }

const value3 = ref(null)

const value4 = ref()

const value5 = ref()

const value6 = ref(3)

const value7 = ref()

const value8 = ref(3.7)

const icons = [ChatRound, ChatLineRound, ChatDotRound] // same as { 2: ChatRound, 4: { value: ChatLineRound, excluded: true }, 5: ChatDotRound }
</script>

<style lang="scss" scoped>
.element-rate {  
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 16px;
    font-weight: 500;
  }
  .demo-rate-block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
    .demonstration {
      display: block;
      color: var(--el-text-color-secondary);
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
}
</style>