<template>
  <div class="element-tooltip system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div class="tooltip-base-box">
        <div class="row center">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="左上角提示信息"
            placement="top-start"
          >
            <el-button>top-start</el-button>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="顶部中心提示信息"
            placement="top"
          >
            <el-button>top</el-button>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="右上方提示信息"
            placement="top-end"
          >
            <el-button>top-end</el-button>
          </el-tooltip>
        </div>
        <div class="row">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="左上角提示信息"
            placement="left-start"
          >
            <el-button>left-start</el-button>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="右上方提示信息"
            placement="right-start"
          >
            <el-button>right-start</el-button>
          </el-tooltip>
        </div>
        <div class="row">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="左中心提示信息"
            placement="left"
          >
            <el-button class="mt-3 mb-3">left</el-button>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="右中心提示信息"
            placement="right"
          >
            <el-button>right</el-button>
          </el-tooltip>
        </div>
        <div class="row">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="左下角提示信息"
            placement="left-end"
          >
            <el-button>left-end</el-button>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="右下角提示信息"
            placement="right-end"
          >
            <el-button>right-end</el-button>
          </el-tooltip>
        </div>
        <div class="row center">
          <el-tooltip
            class="box-item"
            effect="dark"
            content="左下角提示信息"
            placement="bottom-start"
          >
            <el-button>bottom-start</el-button>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="底部中心提示信息"
            placement="bottom"
          >
            <el-button>bottom</el-button>
          </el-tooltip>
          <el-tooltip
            class="box-item"
            effect="dark"
            content="右下角提示信息"
            placement="bottom-end"
          >
            <el-button>bottom-end</el-button>
          </el-tooltip>
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">主题</span>
      </template>
      <el-tooltip content="顶部中心" placement="top">
        <el-button>Dark</el-button>
      </el-tooltip>
      <el-tooltip content="底部中心" placement="bottom" effect="light">
        <el-button>Light</el-button>
      </el-tooltip>
      <el-tooltip content="底部中心" effect="customized">
        <el-button>自定义主题</el-button>
      </el-tooltip>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">更多内容的文字提示</span>
      </template>
      <el-tooltip placement="top">
        <template #content> 多行 <br /> 第二行 </template>
        <el-button>顶部中心</el-button>
      </el-tooltip>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">高级扩展</span>
      </template>
      <el-tooltip
        :disabled="disabled"
        content="单击关闭工具提示功能"
        placement="bottom"
        effect="light"
      >
        <el-button @click="disabled = !disabled"
          >点击 {{ disabled ? 'active' : 'close' }} 提示功能</el-button
        >
      </el-tooltip>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">虚拟触发</span>
      </template>
      <el-tooltip
        v-model:visible="visible"
        content="底部中心"
        placement="bottom"
        effect="light"
        trigger="click"
        virtual-triggering
        :virtual-ref="triggerRef"
      />
      <el-button @click="visible = !visible">测试</el-button>
    </el-card>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const disabled = ref(false)

const visible = ref(false)
const triggerRef = ref({
  getBoundingClientRect() {
    return position.value
  },
})

const position = ref({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
})

const mousemoveHandler = (e) => {
  position.value = DOMRect.fromRect({
    width: 0,
    height: 0,
    x: e.clientX,
    y: e.clientY,
  })
}
onMounted(() => {
  document.addEventListener('mousemove', mousemoveHandler)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', mousemoveHandler)
})
</script>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
.el-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.el-popper.is-customized .el-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.expand-fade-leave-active {
  margin-left: 20px;
  opacity: 0;
}
</style>

<style lang="scss" scoped>
.element-tooltip {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>