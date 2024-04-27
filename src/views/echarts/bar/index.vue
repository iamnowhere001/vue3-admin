<template>
  <div class="echarts-bars system-scrollbar">
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">基础柱状图</span>
          </template>
          <div class="bar-container">
            <base-bar :data="barData1" :option="barOption1"></base-bar>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">多系列柱状图</span>
          </template>
          <div class="bar-container">
            <multiple-bar :data="barData2" :option="barOption2"></multiple-bar>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">堆叠柱状图</span>
          </template>
          <div class="bar-container">
            <multiple-bar :data="barData3" :option="barOption3"></multiple-bar>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">带折线柱状图</span>
          </template>
          <div class="bar-container">
            <line-bar :data="barData4" :option="barOption4"></line-bar>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">横向柱状图</span>
          </template>
          <div class="bar-container">
            <h-base-bar :data="barData1" :option="barOption5"></h-base-bar>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">横向多系列柱状图</span>
          </template>
          <div class="bar-container">
            <h-multiple-bar
              :data="barData2"
              :option="barOption6"
            ></h-multiple-bar>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import BaseBar from "@/components/echarts/Bar/BaseBar.vue";
import MultipleBar from "@/components/echarts/Bar/MultipleBar.vue";
import LineBar from "@/components/echarts/Bar/LineBar.vue";
import HBaseBar from "@/components/echarts/Bar/HBaseBar.vue";
import HMultipleBar from "@/components/echarts/Bar/HMultipleBar.vue";
import { useBar } from "./hooks/useBar";

const {
  barData1,
  barOption1,
  barData2,
  barOption2,
  barData3,
  barOption3,
  barData4,
  barOption4,
  barOption5,
  barOption6,
} = useBar();
</script>

<style lang="scss" scoped>
.echarts-bars {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .bar-container {
    height: 318px;
  }
}
</style>
