<template>
  <div :style="`width:${width};`" :class="`act-detail ${className}`">
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidth"
      :inline="inline"
    >
      <el-form-item v-for="(item, index) in options" :key="index">
        <template #label>
          <span class="label"> {{ item.label }}: </span>
        </template>
        <template v-if="Object.keys(slots).indexOf(item.prop) !== -1">
          <slot :name="item.prop" :value="detail[item.prop]" />
        </template>
        <span
          class="value"
          :title="detail[item.prop]"
          :style="`-webkit-line-clamp: ${clampNum};`"
          v-else
          >{{ detail[item.prop] }}</span
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { useSlots } from "vue";
const props = defineProps({
  className: {
    type: String,
    default: "",
  },
  width: {
    // 详情盒子宽度
    type: String,
    default: "100%",
  },
  labelPosition: {
    // 详情盒子宽度
    type: String,
    default: "right",
  },
  labelWidth: {
    type: [String, Number],
    default: "auto",
  },
  // 是否单行展示多个配置项
  inline: {
    type: Boolean,
    default: false,
  },
  detail: {
    // 详情所展示对象
    type: Object,
    default: () => ({}),
  },
  options: {
    // 详情所展示配置项
    type: Array,
    default: () => [],
  },
  clampNum: {
    // 换行数
    type: Number,
    default: 2,
  },
});
const slots = useSlots();
</script>

<style lang="scss" scoped>
.act-detail {
  .label {
    color: var(--system-font-color2);
  }
  .value {
    color: var(--system-font-color1);
  }
  :deep(.el-form-item__content) {
    color: var(--system-font-color1);
  }
}
</style>
