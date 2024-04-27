<template>
  <div class="echarts-other system-scrollbar">
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">基础仪表盘</span>
          </template>
          <div class="chart-container">
            <gauge :data="gaugeData" :option="gaugeOption1"></gauge>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">半圆仪表盘</span>
          </template>
          <div class="chart-container">
            <gauge :data="gaugeData" :option="gaugeOption2"></gauge>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">雷达图</span>
          </template>
          <div class="chart-container">
            <radar :option="radarOption" :data="radarData"></radar>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">下行漏斗图</span>
          </template>
          <div class="chart-container">
            <funnel :data="funnelData1" :option="funnelOption1"></funnel>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">上升漏斗图</span>
          </template>
          <div class="chart-container">
            <funnel :data="funnelData2" :option="funnelOption2"></funnel>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">水球图</span>
          </template>
          <div class="chart-container">
            <liquid-fill
              :data="liquidFillData"
              :option="liquidFillOption"
            ></liquid-fill>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Gauge from "@/components/echarts/Gauge";
import Radar from "@/components/echarts/Radar";
import Funnel from "@/components/echarts/Funnel";
import LiquidFill from "@/components/echarts/LiquidFill";
import { useOther } from "./hooks/useOther";

const {
  gaugeData,
  gaugeOption1,
  gaugeOption2,
  radarOption,
  radarData,
  funnelData1,
  funnelOption1,
  funnelData2,
  funnelOption2,
  liquidFillData,
  liquidFillOption,
} = useOther();
</script>

<style lang="scss" scoped>
.echarts-other {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .chart-container {
    height: 318px;
  }
}
</style>
