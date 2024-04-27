<template>
  <div class="scroll-plane-container">
    <el-icon class="arrow left" @click="scrollTo('left')">
      <ArrowLeft />
    </el-icon>
    <el-scrollbar
      ref="scrollbarRef"
      wrap-class="system-scrollbar"
      @wheel.prevent="wheelScroll"
      @scroll="scroll"
    >
      <div ref="scrollbarContentRef" class="scrollbar-content">
        <slot />
      </div>
    </el-scrollbar>
    <el-icon class="arrow right" @click="scrollTo('right')">
      <ArrowRight />
    </el-icon>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  tagRefs: {
    type: Object,
    required: true,
  },
});

const scrollbarRef = ref(null);
const scrollbarContentRef = ref(null);

//当前滚动条距离左边的距离
let currentScrollLeft = 0;
//每次滚动距离
const translateDistance = 200;

//滚动时触发
const scroll = ({ scrollLeft }) => {
  currentScrollLeft = scrollLeft;
};

//鼠标滚轮滚动时触发
const wheelScroll = ({ deltaY }) => {
  if (/^-/.test(deltaY.toString())) {
    scrollTo("left");
  } else {
    scrollTo("right");
  }
};

//获取可能需要的宽度
const getWidth = () => {
  /** 可滚动内容的长度 */
  const scrollbarContentRefWidth = scrollbarContentRef.value.clientWidth;
  /** 滚动可视区宽度 */
  const scrollbarRefWidth = scrollbarRef.value.wrapRef.clientWidth;
  /** 最后剩余可滚动的宽度 */
  const lastDistance =
    scrollbarContentRefWidth - scrollbarRefWidth - currentScrollLeft;

  return { scrollbarContentRefWidth, scrollbarRefWidth, lastDistance };
};

//左右滚动
const scrollTo = (direction, distance = translateDistance) => {
  let scrollLeft = 0;
  const { scrollbarContentRefWidth, scrollbarRefWidth, lastDistance } =
    getWidth();
  // 没有横向滚动条，直接结束
  if (scrollbarRefWidth > scrollbarContentRefWidth) return;
  if (direction === "left") {
    scrollLeft = Math.max(0, currentScrollLeft - distance);
  } else {
    scrollLeft = Math.min(
      currentScrollLeft + distance,
      currentScrollLeft + lastDistance
    );
  }
  scrollbarRef.value.setScrollLeft(scrollLeft);
};
</script>

<style lang="scss" scoped>
.scroll-plane-container {
  height: 100%;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: space-between;
  // &:hover {
  //   .arrow {
  //     visibility: visible;
  //   }
  // }
  .arrow {
    width: 30px;
    height: 100%;
    cursor: pointer;
    color: var(--system-primary-color);
    font-size: 16px;
    // visibility: hidden;
    &.left {
      border-right: 1px solid var(--system-shadow-color);
    }
    &.right {
      border-left: 1px solid var(--system-shadow-color);
    }
  }
  .el-scrollbar {
    flex: 1;
    // 横向超出窗口长度时，显示滚动条
    white-space: nowrap;
    .scrollbar-content {
      display: inline-block;
    }
  }
}
</style>
