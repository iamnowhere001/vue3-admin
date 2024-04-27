<template>
  <div class="demo-multiple-page system-scrollbar">
    <MultiplePage>
      <template #part1>
        <div class="part">部分1</div>
      </template>
      <template #part2>
        <div class="part">部分2</div>
      </template>
      <template #part3>
        <div class="part">部分3</div>
      </template>
    </MultiplePage>
  </div>
</template>

<script setup>
import MultiplePage from "@/components/MultiplePage";
</script>

<style lang="scss" scoped>
.demo-multiple-page {
  overflow-y: auto;
  height: 100%;
  .part {
    height: 300px;
  }
}
</style>
