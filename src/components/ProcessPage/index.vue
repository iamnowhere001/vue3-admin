<template>
  <div class="process-page">
    <slot v-for="item in slotKeys" :key="item" :name="item"></slot>
    <div class="page-buttons" v-if="buttonVisible">
      <el-button @click="prePage" :disabled="activePageIndex === 0"
        >上一步</el-button
      >
      <el-button type="primary" @click="nextPage">{{
        confirmBtnText
      }}</el-button>
    </div>
  </div>
</template>

<script setup>
import { useSlots, ref, computed, watch } from "vue";

const emits = defineEmits(["confirm", "nextConfirm"]);
const slots = useSlots();
const props = defineProps({
  buttonVisible: {
    type: Boolean,
    default: false,
  },
  activePageName: {
    type: String,
    default: "",
  },
  nextDisabled: {
    type: Boolean,
    default: false,
  },
});

const activePageIndex = ref(0);

const slotKeys = computed(() => {
  return Object.keys(slots).slice(
    activePageIndex.value,
    activePageIndex.value + 1
  );
});

const slotLength = computed(() => {
  return Object.keys(slots).length;
});

const confirmBtnText = computed(() => {
  return activePageIndex.value === slotLength.value - 1 ? "确定" : "下一步";
});

function prePage() {
  if (activePageIndex.value > 0) {
    activePageIndex.value--;
  }
}

function nextPage() {
  if (activePageIndex.value < slotLength.value - 1) {
    if (!props.nextDisabled) {
      activePageIndex.value++;
    } else {
      emits("nextConfirm", activePageIndex);
    }
  } else {
    emits("confirm");
  }
}

watch(
  () => props.activePageName,
  (value) => {
    if (value) {
      const index = Object.keys(slots).findIndex((item) => item === value);
      if (index !== -1) {
        activePageIndex.value = index;
      }
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.process-page {
  height: 100%;
  position: relative;
  :deep() {
    & > div {
      height: 100%;
    }
  }
  .page-buttons {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 30px;
  }
}
</style>
