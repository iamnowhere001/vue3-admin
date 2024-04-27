<template>
  <div class="echarts-lines system-scrollbar">
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">基础折线图</span>
          </template>
          <div class="line-container">
            <base-line :data="lineData1" :option="lineOption1"></base-line>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">区域折线图</span>
          </template>
          <div class="line-container">
            <base-line :data="lineData2" :option="lineOption2"></base-line>
          </div> </el-card
      ></el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">多系列折线图</span>
          </template>
          <div class="line-container">
            <multiple-line
              :data="lineData3"
              :option="lineOption3"
            ></multiple-line>
          </div> </el-card
      ></el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">多系列区域折线图</span>
          </template>
          <div class="line-container">
            <multiple-line
              :data="lineData4"
              :option="lineOption4"
            ></multiple-line>
          </div> </el-card></el-col
    ></el-row>
  </div>
</template>

<script setup>
import BaseLine from "@/components/echarts/Line/BaseLine.vue";
import MultipleLine from "@/components/echarts/Line/MultipleLine.vue";
import { useLine } from "./hooks/useLine";

const {
  lineData1,
  lineOption1,
  lineData2,
  lineOption2,
  lineData3,
  lineOption3,
  lineData4,
  lineOption4,
} = useLine();
</script>

<style lang="scss" scoped>
.echarts-lines {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .line-container {
    height: 318px;
  }
}
</style>
