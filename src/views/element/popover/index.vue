<template>
  <div class="element-popover system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-popover
        placement="top-start"
        title="标题"
        :width="200"
        trigger="hover"
        content="这是内容，这是内容，这是内容"
      >
        <template #reference>
          <el-button class="m-2">通过悬浮激活</el-button>
        </template>
      </el-popover>
      <el-popover
        placement="bottom"
        title="标题"
        :width="200"
        trigger="click"
        content="这是内容，这是内容，这是内容"
      >
        <template #reference>
          <el-button class="m-2">通过点击激活</el-button>
        </template>
      </el-popover>
      <el-popover
        ref="popover"
        placement="right"
        title="标题"
        :width="200"
        trigger="focus"
        content="这是内容，这是内容，这是内容"
      >
        <template #reference>
          <el-button class="m-2">通过焦点激活</el-button>
        </template>
      </el-popover>
      <el-popover
        ref="popover"
        title="标题"
        :width="200"
        trigger="contextmenu"
        content="这是内容，这是内容，这是内容"
      >
        <template #reference>
          <el-button class="m-2">右键菜单激活</el-button>
        </template>
      </el-popover>
      <el-popover
        :visible="visible"
        placement="bottom"
        title="标题"
        :width="200"
        content="这是内容，这是内容，这是内容"
      >
        <template #reference>
          <el-button class="m-2" @click="visible = !visible"
            >通过手动激活</el-button
          >
        </template>
      </el-popover>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">虚拟触发</span>
      </template>
      <el-button ref="buttonRef" v-click-outside="onClickOutside">点击我</el-button>
      <el-popover
        ref="popoverRef"
        :virtual-ref="buttonRef"
        trigger="click"
        title="With title"
        virtual-triggering
      >
        <span> 某些内容 </span>
      </el-popover>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">内容可扩展</span>
      </template>
      <div style="display: flex; align-items: center">
        <el-popover placement="right" :width="400" trigger="click">
          <template #reference>
            <el-button style="margin-right: 16px">通过点击激活</el-button>
          </template>
          <el-table :data="gridData">
            <el-table-column width="150" property="date" label="日期" />
            <el-table-column width="100" property="name" label="名字" />
            <el-table-column width="300" property="address" label="地址" />
          </el-table>
        </el-popover>
        <el-popover
          :width="300"
          popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
        >
          <template #reference>
            <el-avatar src="./logo.png" />
          </template>
          <template #default>
            <div
              class="demo-rich-conent"
              style="display: flex; gap: 16px; flex-direction: column"
            >
              <el-avatar
                :size="60"
                src="./logo.png"
                style="margin-bottom: 8px"
              />
              <div>
                <p
                  class="demo-rich-content__name"
                  style="margin: 0; font-weight: 500"
                >
                  Element Plus
                </p>
                <p
                  class="demo-rich-content__mention"
                  style="margin: 0; font-size: 14px; color: var(--el-color-info)"
                >
                  @element-plus
                </p>
              </div>
              <p class="demo-rich-content__desc" style="margin: 0">
                Element Plus，一个面向开发人员、设计人员和产品经理的基于Vue 3的组件库
              </p>
            </div>
          </template>
        </el-popover>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">嵌套操作</span>
      </template>
      <el-popover :visible="visible1" placement="top" :width="200">
        <p>你确定要删除这个吗?</p>
        <div style="text-align: right; margin: 0">
          <el-button size="small" text @click="visible1 = false">取消</el-button>
          <el-button size="small" type="primary" @click="visible1 = false"
            >确定</el-button
          >
        </div>
        <template #reference>
          <el-button @click="visible1 = true">删除</el-button>
        </template>
      </el-popover>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">指令</span>
      </template>
      <el-button v-popover="popoverRef1" v-click-outside="onClickOutside1"
        >点击我</el-button
      >
      <el-popover
        ref="popoverRef1"
        trigger="click"
        title="With title"
        virtual-triggering
        persistent
      >
        <span>一些内容</span>
      </el-popover>
    </el-card>
  </div>
</template>

<script setup>
import { ref, unref  } from 'vue'
import { ClickOutside as vClickOutside } from 'element-plus'

//#region 基础用法
const visible = ref(false)
//#endregion

//#region 虚拟触发
const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
  // unref(popoverRef).popperRef.delayHide()
}
//#endregion

//#region 内容可扩展
const gridData = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]
//#endregion

//#region 嵌套操作
const visible1 = ref(false)
//#endregion

//#region 指令
const buttonRef1 = ref()
const popoverRef1 = ref()
const onClickOutside1 = () => {
  // unref(popoverRef1).popperRef1.delayHide()
}
//#endregion
</script>

<style lang="scss" scoped>
.element-popover {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}

.el-button + .el-button {
  margin-left: 8px;
}
</style>