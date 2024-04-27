<template>
  <div class="element-tag system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-tag>标签 1</el-tag>
      <el-tag class="ml-2" type="success">标签 2</el-tag>
      <el-tag class="ml-2" type="info">标签 3</el-tag>
      <el-tag class="ml-2" type="warning">标签 4</el-tag>
      <el-tag class="ml-2" type="danger">标签 5</el-tag>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">可移除标签</span>
      </template>
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        class="mx-1"
        closable
        :type="tag.type"
      >
        {{ tag.name }}
      </el-tag>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">动态编辑标签</span>
      </template>
      <el-tag
        v-for="tag in dynamicTags"
        :key="tag"
        class="mx-1"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        v-if="inputVisible"
        ref="InputRef"
        v-model="inputValue"
        class="ml-1 w-20"
        size="small"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
      />
      <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
        + 新建标签
      </el-button>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">不同尺寸</span>
      </template>
      <el-row>
        <el-tag class="mx-1" size="large">Large</el-tag>
        <el-tag class="mx-1">Default</el-tag>
        <el-tag class="mx-1" size="small">Small</el-tag>
      </el-row>
      <el-row class="mt-4">
        <el-tag class="mx-1" size="large" closable>Large</el-tag>
        <el-tag class="mx-1" closable>Default</el-tag>
        <el-tag class="mx-1" size="small" closable>Small</el-tag>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">主题</span>
      </template>
      <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
        <span class="tag-group__title m-1 line-height-2">Dark</span>
        <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          class="mx-1"
          effect="dark"
        >
          {{ item.label }}
        </el-tag>
        <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          class="mx-1"
          effect="dark"
          closable
        >
          {{ item.label }}
        </el-tag>
      </div>
      <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
        <span class="tag-group__title m-1">Light</span>
        <el-tag
          v-for="item in items"
          :key="item.label"
          class="mx-1"
          :type="item.type"
          effect="light"
        >
          {{ item.label }}
        </el-tag>
        <el-tag
          v-for="item in items"
          :key="item.label"
          class="mx-1"
          :type="item.type"
          effect="light"
          closable
        >
          {{ item.label }}
        </el-tag>
      </div>
      <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
        <span class="tag-group__title m-1">Plain</span>
        <el-tag
          v-for="item in items"
          :key="item.label"
          class="mx-1"
          :type="item.type"
          effect="plain"
        >
          {{ item.label }}
        </el-tag>
        <el-tag
          v-for="item in items"
          :key="item.label"
          class="mx-1"
          :type="item.type"
          effect="plain"
          closable
        >
          {{ item.label }}
        </el-tag>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">圆形标签</span>
      </template>
      <div class="flex flex-wrap gap-2 my-2">
        <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          class="mx-1"
          effect="dark"
          round
        >
          {{ item.label }}
        </el-tag>
      </div>
      <div class="flex flex-wrap gap-2">
        <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          class="mx-1"
          effect="light"
          round
        >
          {{ item.label }}
        </el-tag>
      </div>
      <div class="flex flex-wrap gap-2 my-2">
        <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          class="mx-1"
          effect="plain"
          round
        >
          {{ item.label }}
        </el-tag>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">可选中的标签</span>
      </template>
      <div>
        <el-check-tag checked style="margin-right: 8px">Checked</el-check-tag>
        <el-check-tag :checked="checked" @change="onChange">Toggle me</el-check-tag>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { ElInput } from 'element-plus'

//#region  可移除标签
const tags = ref([
  { name: '标签 1', type: '' },
  { name: '标签 2', type: 'success' },
  { name: '标签 3', type: 'info' },
  { name: '标签 4', type: 'warning' },
  { name: '标签 5', type: 'danger' },
])
//#endregion

//#region 动态编辑标签
const inputValue = ref('')
const dynamicTags = ref(['标签 1', '标签 2', '标签 3'])
const inputVisible = ref(false)
const InputRef = ref()

const handleClose = (tag) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    if (InputRef.value && InputRef.value.input) {
      InputRef.value.input.focus()
    }
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
//#endregion

//#region  主题
const items = ref([
  { type: '', label: '标签 1' },
  { type: 'success', label: '标签 2' },
  { type: 'info', label: '标签 3' },
  { type: 'danger', label: '标签 4' },
  { type: 'warning', label: '标签 5' },
])
//#endregion

//#region 可选中的标签
const checked = ref(false)

const onChange = (status) => {
  checked.value = status
}
//#endregion
</script>

<style lang="scss" scoped>
.element-tag {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
  .ml-2 {
    margin-left: 0.5rem;
  }
  .mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .ml-1 {
    margin-left: 0.25rem;
  }
  .mt-4 {
    margin-top: 1rem;
  }
  .gap-1 {
    grid-gap: 0.25rem;
    gap: 0.25rem;
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
  .my-2 {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
  }
}
</style>