<template>
  <div class="system-title-container flex">
    <!-- <img src="@/assets/images/logo.svg" class="system-log" /> -->
    <img src="@/assets/images/logo.png" class="system-log" />
    <h3 class="system-title">{{ title }}</h3>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const title = computed(() => {
  return store.state.user.systemTitle;
});
</script>

<style lang="scss" scoped>
.system-title-container {
  width: 438px;
  height: 100%;
  align-items: center;
  padding-left: 14px;
  position: relative;
  .system-log {
    width: 50px;
    height: 33px;
  }
  .system-title {
    color: var(--system-white-color);
    font-size: 24px;
    line-height: 47px;
    margin-left: 10px;
    font-family: SourceHanSansSC, SourceHanSansSC-Medium;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 12px;
    height: 47px;
    width: 1px;
    background-color: var(--system-border-color4);
    margin-right: 20px;
  }
}
.white {
  .system-title-container {
    .system-title {
      color: var(--system-font-color7);
    }
  }
}
</style>
