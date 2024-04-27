<template>
  <div class="element-collapse system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="一致性" name="1">
            <div>
              与现实生活一致：符合真实的过程和逻辑生活，并遵守用户习惯的语言和习惯；
            </div>
            <div>
              界面内一致：所有元素都应该一致，例如：设计风格、图标和文本、元素的位置等。
            </div>
          </el-collapse-item>
          <el-collapse-item title="反馈" name="2">
            <div>
              操作反馈：通过风格更新和互动效果，让用户清晰感知自己的操作；
            </div>
            <div>
              视觉反馈：通过更新或重新排列页面元素来反映当前状态。
            </div>
          </el-collapse-item>
          <el-collapse-item title="效率" name="3">
            <div>
              简化流程：保持操作流程简单直观；
            </div>
            <div>
              明确清晰:明确表达意图，便于用户快速理解和决策;
            </div>
            <div>
              易于识别:界面应该是直接的，这是有帮助的用户识别，从记忆和回忆中解放出来。
            </div>
          </el-collapse-item>
          <el-collapse-item title="可控制性" name="4">
            <div>
              决策:对操作提供建议，但不为用户做决策;
            </div>
            <div>
              可控后果:用户应该被授予自由操作，包括取消、中止或终止电流操作。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">手风琴效果</span>
      </template>
      <div>
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="一致性" name="1">
            <div>
              与现实生活一致：符合真实的过程和逻辑生活，并遵守用户习惯的语言和习惯；
            </div>
            <div>
              界面内一致：所有元素都应该一致，例如：设计风格、图标和文本、元素的位置等。
            </div>
          </el-collapse-item>
          <el-collapse-item title="反馈" name="2">
            <div>
              操作反馈：通过风格更新和互动效果，让用户清晰感知自己的操作；
            </div>
            <div>
              视觉反馈：通过更新或重新排列页面元素来反映当前状态。
            </div>
          </el-collapse-item>
          <el-collapse-item title="效率" name="3">
            <div>
              简化流程：保持操作流程简单直观；
            </div>
            <div>
              明确清晰:明确表达意图，便于用户快速理解和决策;
            </div>
            <div>
              易于识别:界面应该是直接的，这是有帮助的用户识别，从记忆和回忆中解放出来。
            </div>
          </el-collapse-item>
          <el-collapse-item title="可控制性" name="4">
            <div>
              决策:对操作提供建议，但不为用户做决策;
            </div>
            <div>
              可控后果:用户应该被授予自由操作，包括取消、中止或终止电流操作。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义面板标题</span>
      </template>
      <div>
        <el-collapse  accordion>
          <el-collapse-item name="1">
            <template #title>
              一致性&nbsp;<el-icon class="header-icon">
                <info-filled />
              </el-icon>
            </template>
            <div>
              与现实生活一致：符合真实的过程和逻辑生活，并遵守用户习惯的语言和习惯；
            </div>
            <div>
              界面内一致：所有元素都应该一致，例如：设计风格、图标和文本、元素的位置等。
            </div>
          </el-collapse-item>
          <el-collapse-item title="反馈" name="2">
            <div>
              操作反馈：通过风格更新和互动效果，让用户清晰感知自己的操作；
            </div>
            <div>
              视觉反馈：通过更新或重新排列页面元素来反映当前状态。
            </div>
          </el-collapse-item>
          <el-collapse-item title="效率" name="3">
            <div>
              简化流程：保持操作流程简单直观；
            </div>
            <div>
              明确清晰:明确表达意图，便于用户快速理解和决策;
            </div>
            <div>
              易于识别:界面应该是直接的，这是有帮助的用户识别，从记忆和回忆中解放出来。
            </div>
          </el-collapse-item>
          <el-collapse-item title="可控制性" name="4">
            <div>
              决策:对操作提供建议，但不为用户做决策;
            </div>
            <div>
              可控后果:用户应该被授予自由操作，包括取消、中止或终止电流操作。
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'

const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}

const activeName = ref('1')
</script>

<style lang="scss" scoped>
.element-collapse {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>

