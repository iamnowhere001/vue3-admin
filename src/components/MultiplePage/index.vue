<template>
  <div class="multiple-page-content">
    <slot v-for="item in slotKeys" :key="item" :name="item"></slot>
  </div>
</template>

<script setup>
import { useSlots } from "vue";
const slots = useSlots();
const slotKeys = Object.keys(slots);
</script>

<style lang="scss" scoped>
.multiple-page-content {
  :deep() {
    & > div {
      margin-bottom: 20px;
      background-color: var(--system-page-background-color);
      padding: 15px;
      border-radius: 3px;
      box-shadow: 0px 2px 5px 0px var(--system-shadow-color);
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
