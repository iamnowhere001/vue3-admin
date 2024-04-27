<template>
  <div class="element-dropdown system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;" class="example-showcase">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>菜单 1</el-dropdown-item>
            <el-dropdown-item>菜单 2</el-dropdown-item>
            <el-dropdown-item>菜单 3</el-dropdown-item>
            <el-dropdown-item disabled>菜单 4</el-dropdown-item>
            <el-dropdown-item divided>菜单 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-card>
    <el-card style="margin-bottom: 15px;" class="example-showcase">
      <template #header>
        <span class="header-title">触发对象</span>
      </template>
      <div class="flex flex-wrap items-center">
        <el-dropdown>
          <el-button type="primary">
            下拉菜单<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>菜单 1</el-dropdown-item>
              <el-dropdown-item>菜单 2</el-dropdown-item>
              <el-dropdown-item>菜单 3</el-dropdown-item>
              <el-dropdown-item>菜单 4</el-dropdown-item>
              <el-dropdown-item>菜单 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown split-button type="primary" @click="handleClick">
          下拉菜单
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>菜单 1</el-dropdown-item>
              <el-dropdown-item>菜单 2</el-dropdown-item>
              <el-dropdown-item>菜单 3</el-dropdown-item>
              <el-dropdown-item>菜单 4</el-dropdown-item>
              <el-dropdown-item>菜单 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">触发方式</span>
      </template>
      <el-row class="block-col-2">
        <el-col :span="8">
          <span class="demonstration">鼠标悬浮触发</span>
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">菜单 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  菜单 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">菜单 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">菜单 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck">菜单 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
        <el-col :span="8">
          <span class="demonstration">鼠标左键点击触发</span>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              下拉菜单<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">菜单 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  菜单 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">菜单 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">菜单 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck">菜单 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
        <el-col :span="8">
          <span class="demonstration">鼠标右键点击触发</span>
          <el-dropdown trigger="contextmenu">
            <span class="el-dropdown-link">
              下拉菜单<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">菜单 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  菜单 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">菜单 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">菜单 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck">菜单 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;" class="example-showcase">
      <template #header>
        <span class="header-title">菜单隐藏方式</span>
      </template>
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
          下拉菜单<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>菜单 1</el-dropdown-item>
            <el-dropdown-item>菜单 2</el-dropdown-item>
            <el-dropdown-item>菜单 3</el-dropdown-item>
            <el-dropdown-item disabled>菜单 4</el-dropdown-item>
            <el-dropdown-item divided>菜单 5</el-dropdown-item>
            <el-dropdown-item divided>菜单 6</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-card>
    <el-card style="margin-bottom: 15px;" class="example-showcase">
      <template #header>
        <span class="header-title">指令事件</span>
      </template>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          下拉菜单<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">菜单 1</el-dropdown-item>
            <el-dropdown-item command="b">菜单 2</el-dropdown-item>
            <el-dropdown-item command="c">菜单 3</el-dropdown-item>
            <el-dropdown-item command="d" disabled>菜单 4</el-dropdown-item>
            <el-dropdown-item command="e" divided>菜单 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-card>
    <el-card style="margin-bottom: 15px;" class="example-showcase">
      <template #header>
        <span class="header-title">下拉方法</span>
      </template>
      <div style="font-size: 14px">
        <p>打开(关闭) 下拉菜单2 将会关闭(打开) 下拉菜单1。</p>
      </div>
      <div style="margin: 15px">
        <el-button @click="showClick">显示</el-button>
      </div>
      <el-dropdown ref="dropdown1" trigger="contextmenu" style="margin-right: 30px">
        <span class="el-dropdown-link"> 下拉菜单1 </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>菜单 1</el-dropdown-item>
            <el-dropdown-item>菜单 2</el-dropdown-item>
            <el-dropdown-item>菜单 3</el-dropdown-item>
            <el-dropdown-item disabled>菜单 4</el-dropdown-item>
            <el-dropdown-item divided>菜单 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown trigger="contextmenu" @visible-change="handleVisible2">
        <span class="el-dropdown-link"> 下拉菜单2 </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>菜单 1</el-dropdown-item>
            <el-dropdown-item>菜单 2</el-dropdown-item>
            <el-dropdown-item>菜单 3</el-dropdown-item>
            <el-dropdown-item disabled>菜单 4</el-dropdown-item>
            <el-dropdown-item divided>菜单 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-card>
    <el-card style="margin-bottom: 15px;" class="example-showcase">
      <template #header>
        <span class="header-title">指令事件</span>
      </template>
      <el-dropdown size="large" split-button type="primary">
        Large
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>菜单 1</el-dropdown-item>
            <el-dropdown-item>菜单 2</el-dropdown-item>
            <el-dropdown-item>菜单 3</el-dropdown-item>
            <el-dropdown-item>菜单 4</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown split-button type="primary">
        Default
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>菜单 1</el-dropdown-item>
            <el-dropdown-item>菜单 2</el-dropdown-item>
            <el-dropdown-item>菜单 3</el-dropdown-item>
            <el-dropdown-item>菜单 4</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown size="small" split-button type="primary">
        Small
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>菜单 1</el-dropdown-item>
            <el-dropdown-item>菜单 2</el-dropdown-item>
            <el-dropdown-item>菜单 3</el-dropdown-item>
            <el-dropdown-item>菜单 4</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-card>
  </div>
</template>

<script setup>
import {  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
  ArrowDown } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

//#region 触发对象
const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}
//#endregion

//#region 指令事件
const handleCommand = (command) => {
  ElMessage(`点击菜单 ${command}`)
}
//#endregion

//#region  下拉方法
const dropdown1 = ref()
function handleVisible2(visible) {
  if (!dropdown1.value) return
  if (visible) {
    dropdown1.value.handleClose()
  } else {
    dropdown1.value.handleOpen()
  }
}
function showClick() {
  if (!dropdown1.value) return
  dropdown1.value.handleOpen()
}
//#endregion
</script>

<style scoped lang="scss">
.element-dropdown {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
  .example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
  .example-showcase .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .items-center {
    align-items: center;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex {
    display: flex;
  }
  .block-col-2 .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
}
</style>