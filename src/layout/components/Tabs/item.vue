<template>
  <div class="tags-view-item" :class="active ? 'active' : ''">
    <router-link :to="menu.path" v-if="menu.meta.title">
      {{ menu.meta.title }}
    </router-link>
    <span
      class="el-icon"
      @click.stop="closeTab"
      v-if="!menu.meta.hideClose"
      title="关闭当前标签页"
      ><el-icon><Close /></el-icon
    ></span>
  </div>
</template>

<script setup>
const props = defineProps({
  menu: {
    type: Object,
    default: () => {
      return {
        path: "",
        meta: {
          label: "",
          hideClose: false,
        },
      };
    },
  },
  active: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["close"]);

// 关闭按钮
function closeTab() {
  emits("close");
}
</script>

<style lang="scss" scoped>
.tags-view-item {
  display: inline-flex;
  position: relative;
  cursor: pointer;
  border: 1px solid var(--system-primary-color);
  background: transparent;
  font-size: 14px;
  border-radius: 4px;
  align-items: center;
  padding: 0 16px;
  margin: 0 3px;
  &:hover {
    .el-icon {
      display: inline;
    }
  }
  a {
    color: var(--system-primary-color);
    height: 30px;
    line-height: 30px;
    display: inline-block;
  }
  .el-icon {
    margin-left: 5px;
    color: var(--system-primary-color);
    display: none;
  }
  &:first-of-type {
    margin-left: 8px;
  }
  &:last-of-type {
    margin-right: 8px;
  }
  &.active {
    background: var(--system-primary-color);
    border-color: var(--system-primary-color);
    a {
      color: var(--system-white-color);
    }
    &:hover {
      background: var(--system-primary-color);
    }
    .el-icon {
      margin-left: 5px;
      color: var(--system-white-color);
    }
  }
}

.blue {
  .tags-view-item {
    &.active {
      background: var(--system-tag-bg-color1);
      &:hover {
        background: var(--system-tag-bg-color1);
      }
    }
  }
}
</style>
