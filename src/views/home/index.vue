
<template>
  <div class="home system-scrollbar">
    <el-card class="box-card">
      <p class="title">{{ title }}</p>
      <p class="content">
        系统介绍：Vue3统一后台管理框架，目前支持多种种风格的切换，支持自定义页面布局，并添加了丰富的自定义组件和指令，集成了echart常用的图表。
      </p>
    </el-card>
    <el-row :gutter="24">
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>主要组件</span>
            </div>
          </template>
          <el-descriptions :column="1" :border="true">
            <el-descriptions-item label="表格"
              ><el-text type="primary">ActTable</el-text></el-descriptions-item
            >
            <el-descriptions-item label="表单"
              ><el-text type="primary">ActForm</el-text></el-descriptions-item
            >
            <el-descriptions-item label="详情"
              ><el-text type="primary">ActDetail</el-text></el-descriptions-item
            >
            <el-descriptions-item label="标签"
              ><el-text type="primary">ActTag</el-text></el-descriptions-item
            >
            <el-descriptions-item label="弹框"
              ><el-text type="primary">ActDialog</el-text></el-descriptions-item
            >
          </el-descriptions>
        </el-card></el-col
      >
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>自定义指令</span>
            </div>
          </template>
          <div class="directive-box">
            <el-text class="mx-1" size="large">国旗（v-flag）</el-text>
            <p class="directive">
              <span v-flag>中国</span>
              <span v-flag>美国</span>
              <span v-flag>德国</span>
              <span v-flag>英国</span>
              <span v-flag>俄罗斯</span>
            </p>
            <el-text class="mx-1" size="large">字典值转换（v-fmt）</el-text>
            <p class="directive">
              <span
                v-fmt="{
                  value: 1,
                  mapping,
                }"
              ></span>
              <span
                v-fmt="{
                  value: 2,
                  mapping,
                }"
              ></span>
              <span
                v-fmt="{
                  value: 3,
                  mapping,
                }"
              ></span>
            </p>
          </div> </el-card
      ></el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>依赖信息</span>
            </div>
          </template>
          <el-descriptions :column="2" :border="true">
            <el-descriptions-item label="vue">^3.2.13</el-descriptions-item>
            <el-descriptions-item label="vuex">^4.0.0</el-descriptions-item>
            <el-descriptions-item label="vue-router"
              >^4.0.3</el-descriptions-item
            >
            <el-descriptions-item label="element-plus"
              >^2.3.3</el-descriptions-item
            >
            <el-descriptions-item label="vxe-table"
              >^4.3.10</el-descriptions-item
            >
            <el-descriptions-item label="axios">^1.3.4</el-descriptions-item>
            <el-descriptions-item label="echarts">^5.4.2</el-descriptions-item>
            <el-descriptions-item label="vue-echarts"
              >^6.5.5</el-descriptions-item
            >
            <el-descriptions-item label="@vueuse/core"
              >^9.13.0</el-descriptions-item
            >
            <el-descriptions-item label="lodash">^4.17.21</el-descriptions-item>
          </el-descriptions>
        </el-card></el-col
      >
    </el-row>
    <el-row :gutter="24">
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>折线图</span>
              <el-button type="primary" link @click="gotoMore('/echarts/line')"
                >更多</el-button
              >
            </div>
          </template>
          <div class="chart-box">
            <base-line :data="lineData" :option="lineOption"></base-line>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>柱状图</span>
              <el-button type="primary" link @click="gotoMore('/echarts/bar')"
                >更多</el-button
              >
            </div>
          </template>
          <div class="chart-box">
            <base-bar :data="barData" :option="barOption"></base-bar>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>饼图</span>
              <el-button type="primary" link @click="gotoMore('/echarts/pie')"
                >更多</el-button
              >
            </div>
          </template>
          <div class="chart-box">
            <pie :data="pieData" :option="pieOption"></pie>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>雷达图</span>
              <el-button type="primary" link @click="gotoMore('/echarts/other')"
                >更多</el-button
              >
            </div>
          </template>
          <div class="chart-box">
            <radar :option="radarOption" :data="radarData"></radar>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>中国地图</span>
              <el-button type="primary" link @click="gotoMore('/echarts/map')"
                >更多</el-button
              >
            </div>
          </template>
          <div class="map-box">
            <china-map
              :data="{
                map: chinaData,
                effectScatter: chinaData,
                lines: chinaData,
              }"
              :option="mapOption"
            ></china-map>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import BaseLine from "@/components/echarts/Line/BaseLine.vue";
import BaseBar from "@/components/echarts/Bar/BaseBar.vue";
import Pie from "@/components/echarts/Pie";
import Radar from "@/components/echarts/Radar";
import ChinaMap from "@/components/echarts/Map/China.vue";
import { useHome } from "./hooks/useHome";

const {
  lineData,
  lineOption,
  barData,
  barOption,
  pieData,
  pieOption,
  radarOption,
  radarData,
  chinaData,
  mapOption,
  gotoMore,
  mapping,
  title,
} = useHome();
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .box-card {
    margin: 10px 0px;
  }
  .title {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
  }
  .content {
    font-size: 14px;
  }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
  }
  .directive-box {
    height: 200px;
    .directive {
      margin-top: 15px;
      margin-bottom: 25px;
      span {
        margin: 10px;
      }
    }
  }
  .chart-box {
    height: 300px;
  }
  .map-box {
    height: 400px;
  }
}
</style>
