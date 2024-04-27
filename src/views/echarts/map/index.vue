<template>
  <div class="echarts-map system-scrollbar">
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="12">
        <el-card>
          <template #header>
            <span class="header-title line-decorate"
              >世界地图（热力图、散点）</span
            >
          </template>
          <div class="map-container">
            <world-map
              :option="option"
              :data="{ map: mapData, scatter: mapData }"
            ></world-map>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <span class="header-title line-decorate"
              >世界地图（热力图、飞线、带涟漪散点）</span
            >
          </template>
          <div class="map-container">
            <world-map
              :option="option"
              :data="{ map: mapData, effectScatter: mapData, lines: mapData }"
            ></world-map>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="12">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">中国地图</span>
          </template>
          <div class="map-container">
            <china-map
              :data="{
                map: chinaData,
                effectScatter: chinaData,
                lines: chinaData,
              }"
              :option="option"
            ></china-map>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <span class="header-title line-decorate">省市地图</span>
          </template>
          <div class="map-container">
            <province-map
              province="湖北省"
              :data="{
                map: provinceData,
                effectScatter: provinceData,
                lines: provinceData,
              }"
              :option="option"
            ></province-map>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import WorldMap from "@/components/echarts/Map/World.vue";
import ChinaMap from "@/components/echarts/Map/China.vue";
import ProvinceMap from "@/components/echarts/Map/Province.vue";
import { useWorldMap } from "./hooks/useWorldMap";

const { mapData, option, chinaData, provinceData } = useWorldMap();
</script>

<style lang="scss" scoped>
.echarts-map {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .map-container {
    height: 368px;
  }
}
</style>
