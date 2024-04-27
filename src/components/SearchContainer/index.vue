<template>
  <div
    class="search-container"
    :class="{ 'is-spread': isSpread }"
    ref="searchRef"
  >
    <slot></slot>
    <div class="search-buttons">
      <el-button type="primary" size="small" title="搜索" @click="search"
        ><el-icon><Search /></el-icon
      ></el-button>
      <el-button type="primary" size="small" title="重置" @click="reset"
        ><el-icon><Refresh /></el-icon
      ></el-button>
      <el-button
        type="primary"
        size="small"
        @click="toggleSpread"
        :title="!isSpread ? '展开' : '收起'"
      >
        <el-icon
          ><ArrowDownBold v-show="!isSpread" /><ArrowUpBold v-show="isSpread"
        /></el-icon>
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useElementSize, useTimeoutFn } from "@vueuse/core";
const emits = defineEmits(["search", "reset"]);
const isSpread = ref(false);
const searchRef = ref(null);
const { height } = useElementSize(searchRef);

function search() {
  emits("search");
}

function reset() {
  emits("reset");
}

function toggleSpread() {
  isSpread.value = !isSpread.value;
  useTimeoutFn(() => {
    const tableElement = searchRef.value.nextElementSibling;
    if (tableElement)
      tableElement.style.height = `calc(100% - ${height.value + 10}px)`;
  }, 100);
}
</script>

<style lang="scss" scoped>
.search-container {
  position: relative;
  padding-right: 170px;
  max-height: 42px;
  overflow: hidden;
  margin-bottom: 10px;
  &.is-spread {
    max-height: 1000px;
    padding-right: 0px;
    .search-buttons {
      position: static;
      text-align: right;
    }
  }
  .search-buttons {
    position: absolute;
    top: 4px;
    right: 20px;
  }
}
</style>
