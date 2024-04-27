<template>
  <div class="element-divider system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <span>
          今天早上，我坐在窗前，世界像一个路人一样停了下来一会儿，向我点头，然后走了。
        </span>
        <el-divider />
        <span>
          树叶沙沙作响，几乎没有什么想法；他们在我脑海中窃窃私语。
        </span>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px">
      <template #header>
        <span class="header-title">设置文案</span>
      </template>
      <div>
        <span>你是什么，你看不到，你看到的是你的影子。</span>
        <el-divider content-position="left">泰戈尔</el-divider>
        <span>
          我的愿望是愚蠢的，它们在你的歌声中呼喊，我的主人。让我但是听
        </span>
        <el-divider>
          <el-icon><star-filled /></el-icon>
        </el-divider>
        <span>我无法选择最好的。最好的选择我。</span>
        <el-divider content-position="right">泰戈尔</el-divider>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px">
      <template #header>
        <span class="header-title">虚线</span>
      </template>
      <div>
        <span>大海啊，你的语言是什么?</span>
        <el-divider border-style="dashed" />
        <span>永恒疑问的语言。</span>
      </div>
      <el-divider border-style="dotted" />
      <span>天空啊，你的回答是什么？</span>
      <el-divider border-style="double" />
      <span>永恒沉默的语言。</span>
    </el-card>
    <el-card style="margin-bottom: 15px">
      <template #header>
        <span class="header-title">垂直分隔线</span>
      </template>
      <div>
        <span>Rain</span>
        <el-divider direction="vertical" />
        <span>Home</span>
        <el-divider direction="vertical" border-style="dashed" />
        <span>Grass</span>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { StarFilled } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.element-divider {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }  
}
</style>