<template>
  <Teleport to="body">
    <el-dialog
      v-for="(item, index) in dialogList"
      :key="index"
      :title="item.title"
      :width="item.width"
      v-model="item.visible"
      @close="() => closeDialog(item, index, '', true)"
    >
      <component
        :is="item.component"
        v-bind="item.props"
        @close="(...args) => closeDialog(item, index, args)"
      />
    </el-dialog>
  </Teleport>
</template>

<script setup>
import { dialogList, closeDialog } from "./index";
</script>
