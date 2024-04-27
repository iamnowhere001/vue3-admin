<template>
  <div class="element-tabs system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="用户" name="first">用户</el-tab-pane>
        <el-tab-pane label="配置" name="second">配置</el-tab-pane>
        <el-tab-pane label="角色" name="third">角色</el-tab-pane>
        <el-tab-pane label="任务" name="fourth">任务</el-tab-pane>
      </el-tabs>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">卡片风格的标签</span>
      </template>
      <el-tabs v-model="activeName1" type="card" class="demo-tabs" @tab-click="handleClick1">
        <el-tab-pane label="用户" name="first">用户</el-tab-pane>
        <el-tab-pane label="配置" name="second">配置</el-tab-pane>
        <el-tab-pane label="角色" name="third">角色</el-tab-pane>
        <el-tab-pane label="任务" name="fourth">任务</el-tab-pane>
      </el-tabs>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">带有边框的卡片风格</span>
      </template>
      <el-tabs type="border-card">
        <el-tab-pane label="用户">用户</el-tab-pane>
        <el-tab-pane label="配置">配置</el-tab-pane>
        <el-tab-pane label="角色">角色</el-tab-pane>
        <el-tab-pane label="任务">任务</el-tab-pane>
      </el-tabs>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">标签位置的设置</span>
      </template>
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="left">left</el-radio-button>
      </el-radio-group>
      <el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
        <el-tab-pane label="用户">用户</el-tab-pane>
        <el-tab-pane label="配置">配置</el-tab-pane>
        <el-tab-pane label="角色">角色</el-tab-pane>
        <el-tab-pane label="任务">任务</el-tab-pane>
      </el-tabs>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义标签页的内容</span>
      </template>
      <el-tabs type="border-card" class="demo-tabs">
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><calendar /></el-icon>
              <span>路由</span>
            </span>
          </template>
          路由
        </el-tab-pane>
        <el-tab-pane label="配置">配置</el-tab-pane>
        <el-tab-pane label="角色">角色</el-tab-pane>
        <el-tab-pane label="任务">任务</el-tab-pane>
      </el-tabs>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">动态增减标签页</span>
      </template>
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        editable
        class="demo-tabs"
        @edit="handleTabsEdit"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义增加标签页触发器</span>
      </template>
      <div style="margin-bottom: 20px">
        <el-button size="small" @click="addTab(editableTabsValue1)">
          添加标签页
        </el-button>
      </div>
      <el-tabs
        v-model="editableTabsValue1"
        type="card"
        class="demo-tabs"
        closable
        @tab-remove="removeTab"
      >
        <el-tab-pane
          v-for="item in editableTabs1"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Calendar } from '@element-plus/icons-vue'

const activeName = ref('first')

const tabPosition = ref('left')

const handleClick = (tab, event) => {
  console.log(tab, event)
}

const activeName1 = ref('first')

const handleClick1 = (tab, event) => {
  console.log(tab, event)
}

//#region 动态增减标签页
let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: '标签页 1',
    name: '1',
    content: '标签页1的内容',
  },
  {
    title: '标签页 2',
    name: '2',
    content: '标签页2的内容',
  },
])

const handleTabsEdit = (
  targetName,
  action
) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
//#endregion

//#region 自定义增加标签页触发器
let tabIndex1 = 2
const editableTabsValue1 = ref('2')
const editableTabs1 = ref([
  {
    title: '标签页 1',
    name: '1',
    content: '标签页1的内容',
  },
  {
    title: '标签页 2',
    name: '2',
    content: '标签页2的内容',
  },
])

const addTab = (targetName) => {
  const newTabName = `${++tabIndex1}`
  editableTabs1.value.push({
    title: '新的标签页',
    name: newTabName,
    content: '新标签页的内容',
  })
  editableTabsValue1.value = newTabName
}
const removeTab = (targetName) => {
  const tabs = editableTabs1.value
  let activeName = editableTabsValue1.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  editableTabsValue1.value = activeName
  editableTabs1.value = tabs.filter((tab) => tab.name !== targetName)
}
//#endregion
</script>

<style lang="scss">
.demo-tabs {
  .el-tabs__content {
    padding: 32px;
    .el-tab-pane {
      color: #6b778c;
      font-size: 32px;
      font-weight: 600;
    }
    .custom-tabs-label {
      .el-icon {
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
        margin-left: 4px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.element-tabs {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>