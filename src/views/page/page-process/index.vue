<template>
  <div class="page-process">
    <ProcessPage
      @confirm="handleConfirm"
      @nextConfirm="handleNextConfirm"
      :buttonVisible="true"
    >
      <template #part1>
        <div>第一步</div>
      </template>
      <template #part2>
        <div>第二步</div>
      </template>
      <template #part3>
        <div>第三步</div>
      </template>
      <template #part4>
        <div>第四步</div>
      </template>
    </ProcessPage>
  </div>
</template>

<script setup>
import ProcessPage from "@/components/ProcessPage/index";

function handleConfirm() {
  console.log("提交");
}

function handleNextConfirm() {
  console.log("下一步");
}
</script>
