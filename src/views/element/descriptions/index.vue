<template>
  <div class="element-descriptions system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-descriptions title="用户信息">
        <el-descriptions-item label="用户姓名">王洪凯</el-descriptions-item>
        <el-descriptions-item label="手机号码">18100000000</el-descriptions-item>
        <el-descriptions-item label="所在城市">苏州</el-descriptions-item>
        <el-descriptions-item label="所属标签">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="地址">江苏省苏州市吴中区吴中大道1188号</el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">不同尺寸</span>
      </template>
      <el-radio-group v-model="size">
        <el-radio label="large">Large</el-radio>
        <el-radio>Default</el-radio>
        <el-radio label="small">Small</el-radio>
      </el-radio-group>
      <el-descriptions
        class="margin-top"
        title="有边框"
        :column="3"
        :size="size"
        border
      >
        <template #extra>
          <el-button type="primary">操作</el-button>
        </template>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <user />
              </el-icon>
              用户姓名
            </div>
          </template>
          何雨晴
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <iphone />
              </el-icon>
              手机号码
            </div>
          </template>
          18100000000
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <location />
              </el-icon>
              所在城市
            </div>
          </template>
          苏州
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <tickets />
              </el-icon>
              所属标签
            </div>
          </template>
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon :style="iconStyle">
                <office-building />
              </el-icon>
              地址
            </div>
          </template>
          江苏省苏州市吴中区吴中大道1188号
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions
        class="margin-top"
        title="没有边框"
        :column="3"
        :size="size"
        :style="blockMargin"
      >
        <template #extra>
          <el-button type="primary">操作</el-button>
        </template>
        <el-descriptions-item label="用户姓名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号码">18100000000</el-descriptions-item>
        <el-descriptions-item label="所在城市">苏州</el-descriptions-item>
        <el-descriptions-item label="所属标签">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="所在地址">
          江苏省苏州市吴中区吴中大道1188号
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">垂直列表</span>
      </template>
      <el-radio-group v-model="size">
        <el-radio label="large">Large</el-radio>
        <el-radio>Default</el-radio>
        <el-radio label="small">Small</el-radio>
      </el-radio-group>
      <el-descriptions
        title="带边框的垂直列表"
        direction="vertical"
        :column="4"
        :size="size1"
        border
      >
        <el-descriptions-item label="用户姓名">刘宏伟</el-descriptions-item>
        <el-descriptions-item label="手机号码">18100000000</el-descriptions-item>
        <el-descriptions-item label="所在城市" :span="2">苏州</el-descriptions-item>
        <el-descriptions-item label="所属标签">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="所在地址">
          江苏省苏州市吴中区吴中大道1188号
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions
        title="没有边框的垂直列表"
        :column="4"
        :size="size1"
        direction="vertical"
        :style="blockMargin1"
      >
        <el-descriptions-item label="用户姓名">张凯悦</el-descriptions-item>
        <el-descriptions-item label="手机号码">18100000000</el-descriptions-item>
        <el-descriptions-item label="所在城市" :span="2">Suzhou</el-descriptions-item>
        <el-descriptions-item label="所属标签">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="所在地址">
          江苏省苏州市吴中区吴中大道1188号
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义样式</span>
      </template>
      <el-descriptions title="自定义样式列表" :column="3" border>
        <el-descriptions-item
          label="用户姓名"
          label-align="right"
          align="center"
          label-class-name="my-label"
          class-name="my-content"
          width="150px"
          >张卫东</el-descriptions-item
        >
        <el-descriptions-item label="手机号码" label-align="right" align="center"
          >18100000000</el-descriptions-item
        >
        <el-descriptions-item label="所在城市" label-align="right" align="center"
          >苏州</el-descriptions-item
        >
        <el-descriptions-item label="所属标签" label-align="right" align="center">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="所在地址" label-align="right" align="center"
          >江苏省苏州市吴中区吴中大道1188号</el-descriptions-item
        >
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'

//#region 不同尺寸
const size = ref('')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})

const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
//#endregion

//#region 响应式布局
const size1 = ref('')
const blockMargin1 = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
//#endregion
</script>

<style lang="scss" scoped>
.element-descriptions {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
  .el-descriptions {
    margin-top: 20px;
  }
  .cell-item {
    display: flex;
    align-items: center;
  }
  .margin-top {
    margin-top: 20px;
  }

  .my-label {
    background: var(--el-color-success-light-9);
  }
  .my-content {
    background: var(--el-color-danger-light-9);
  }
}
</style>