<template>
  <div class="page-elem-icon system-scrollbar">
    <div style="text-align: right">
      <el-switch
        v-model="copyIcon"
        active-text="复制图标代码"
        inactive-text="复制SVG内容"
      />
    </div>
    <div v-for="item in categories" :key="item.name" class="page-elem-icon-item">
      <div class="page-elem-icon-title">{{ item.name }}</div>
      <ul class="page-elem-icon-list">
        <li
          v-for="component in item.icons"
          :key="component.name"
          :ref="component.name"
          class="icon-item"
          @click="copySvgIcon(component.name, $refs)"
        >
          <span class="demo-svg-icon">
            <ElIcon :size="20">
              <component :is="component" />
            </ElIcon>
            <span class="icon-name">{{ component.name }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue'
import IconCategories from './icons-categories.json'
import clipboardCopy from 'clipboard-copy'
import * as Icons from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const copyIcon = ref(true)
const categories = shallowRef([])
const iconMap = new Map(Object.entries(Icons))

const copyContent = async (content) => {
  try {
    await clipboardCopy(content)
    ElMessage({
      showClose: true,
      message: '复制成功',
      type: 'success',
    })
  } catch {
    ElMessage({
      showClose: true,
      message: '复制失败',
      type: 'error',
    })
  }
}

const copySvgIcon = async (name, refs) => {
  if (copyIcon.value) {
    await copyContent(`<el-icon><${name} /></el-icon>`)
  } else {
    const content = refs[name]?.[0].querySelector('svg')?.outerHTML ?? ''
    await copyContent(content)
  }
}

IconCategories.categories.forEach((category) => {
  const result = {
    name: category.name,
    icons: [],
  }

  category.items.forEach(i => {
    const icon = iconMap.get(i)
    if (icon) {
      result.icons.push(icon)
      iconMap.delete(i)
    }
  })

  categories.value.push(result)
})

categories.value.push({ name: 'Other', icons: Array.from(iconMap.values()) })

</script>

<style scoped lang="scss">
.page-elem-icon {
  height: 100%;
  overflow-y: auto;
  &-item {
    margin-top: 24px;
    &:first-child {
      margin-top: 0;
    }
  }
  &-title {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 10px;
  }
  &-list {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border-top: 1px solid var(--system-border-color2);
    border-left: 1px solid var(--system-border-color2);
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    .icon-item {
      text-align: center;
      color: var(--system-font-color2);
      height: 90px;
      font-size: 13px;
      border-right: 1px solid var(--system-border-color2);
      border-bottom: 1px solid var(--system-border-color2);
      transition: background-color 0.3s;
      &:hover {
        background-color: var(--system-background-color3);
        .el-icon {
          color: var(--system-font-color1);
        }
        color: var(--system-font-color1);
      }

      .demo-svg-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;

        .icon-name {
          margin-top: 8px;
        }
      }
    }
  }
}
</style>