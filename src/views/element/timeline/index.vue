<template>
  <div class="element-timeline system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础步骤条</span>
      </template>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">⾃定义节点样式</span>
      </template>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities1"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :hollow="activity.hollow"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">⾃定义时间戳</span>
      </template>
      <el-timeline>
        <el-timeline-item timestamp="2023/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>Tom committed 2023/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>Tom committed 2023/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>Tom committed 2023/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">垂直居中</span>
      </template>
      <el-timeline>
        <el-timeline-item center timestamp="2023/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>Tom committed 2023/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>Tom committed 2023/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item center timestamp="2023/4/2" placement="top">
          事件开始
        </el-timeline-item>
        <el-timeline-item timestamp="2023/4/2" placement="top">
          事件结束
        </el-timeline-item>
      </el-timeline>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'

//#region 基础步骤条
const activities = ref([
  {
    content: '事件开始',
    timestamp: '2023-04-15',
  },
  {
    content: '通过',
    timestamp: '2023-04-13',
  },
  {
    content: '成功',
    timestamp: '2023-04-11',
  },
])
//#endregion

//#region  ⾃定义节点样式
const activities1 = ref([
  {
    content: '定制化 icon',
    timestamp: '2023-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: '定制化 color',
    timestamp: '2023-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: '定制化 size',
    timestamp: '2023-04-03 20:46',
    size: 'large',
  },
  {
    content: '定制化 hollow',
    timestamp: '2023-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: '默认 node',
    timestamp: '2023-04-03 20:46',
  },
])
//#endregion
</script>

<style lang="scss" scoped>
.element-timeline {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>