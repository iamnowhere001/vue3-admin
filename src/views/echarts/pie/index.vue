<template>
  <div class="echarts-pies system-scrollbar">
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">基础饼图</span>
          </template>
          <div class="pie-container">
            <pie :data="data" :option="option1"></pie>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">图例饼图</span>
          </template>
          <div class="pie-container">
            <pie :data="data" :option="option2"></pie>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">环图</span>
          </template>
          <div class="pie-container">
            <pie :data="data" :option="option3"></pie>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">玫瑰图</span>
          </template>
          <div class="pie-container">
            <pie :data="data" :option="option4"></pie>
          </div>
        </el-card> </el-col
    ></el-row>
  </div>
</template>

<script setup>
import Pie from "@/components/echarts/Pie";
import { usePie } from "./hooks/usePie";

const { data, option1, option2, option3, option4 } = usePie();
</script>

<style lang="scss" scoped>
.echarts-pies {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .pie-container {
    height: 318px;
  }
}
</style>
