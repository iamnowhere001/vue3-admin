<template>
  <div class="element-step system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础步骤条</span>
      </template>
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1" />
        <el-step title="步骤 2" />
        <el-step title="步骤 3" />
      </el-steps>
      <el-button style="margin-top: 12px" @click="next">下一步</el-button>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">含状态的步骤条</span>
      </template>
      <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="已完成" />
        <el-step title="进行中" />
        <el-step title="步骤 3" />
      </el-steps>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">居中的步骤条</span>
      </template>
      <el-steps :active="2" align-center>
        <el-step title="步骤 1" description="一些描述" />
        <el-step title="步骤 2" description="一些描述" />
        <el-step title="步骤 3" description="一些描述" />
        <el-step title="步骤 4" description="一些描述" />
      </el-steps>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">带描述的步骤栏</span>
      </template>
      <el-steps :active="1">
        <el-step title="步骤 1" description="一些描述" />
        <el-step title="步骤 2" description="一些描述" />
        <el-step title="步骤 3" description="一些描述" />
      </el-steps>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">带描述的步骤栏</span>
      </template>
      <el-steps :active="1">
        <el-step title="步骤 1" :icon="Edit" />
        <el-step title="步骤 2" :icon="Upload" />
        <el-step title="步骤 3" :icon="Picture" />
      </el-steps>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">垂直的步骤条</span>
      </template>
      <div style="height: 300px">
        <el-steps direction="vertical" :active="1">
          <el-step title="步骤 1" />
          <el-step title="步骤 2" />
          <el-step title="步骤 3" />
        </el-steps>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">简洁风格的步骤条</span>
      </template>
      <el-steps :space="200" :active="1" simple>
        <el-step title="步骤 1" :icon="Edit" />
        <el-step title="步骤 2" :icon="UploadFilled" />
        <el-step title="步骤 3" :icon="Picture" />
      </el-steps>
      <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
        <el-step title="步骤 1" />
        <el-step title="步骤 2" />
        <el-step title="步骤 3" />
      </el-steps>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Edit, Picture, Upload, UploadFilled  } from '@element-plus/icons-vue'

//#region 基础步骤条
const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
//#endregion
</script>

<style lang="scss" scoped>
.element-step {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>