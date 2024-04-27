<template>
  <v-chart class="chart" ref="lineChart" :option="option" :autoresize="true" />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import * as echarts from "echarts";
import { TooltipComponent, GridComponent } from "echarts/components";
import VChart from "vue-echarts";
import { computed } from "vue";
import { useStore } from "vuex";

use([CanvasRenderer, LineChart, TooltipComponent, GridComponent]);

const props = defineProps({
  option: {
    type: Object,
    default: () => {},
  },
  data: {
    type: Array,
    default: () => [
      { name: "1月", value: 100 },
      { name: "2月", value: 200 },
      { name: "3月", value: 300 },
      { name: "4月", value: 400 },
      { name: "5月", value: 300 },
      { name: "6月", value: 700 },
    ],
  },
});
const store = useStore();

const echartsConfig = computed(() => {
  return store.getters["app/echartConfig"];
});

const option = computed(() => {
  const xData = props.data.map((item) => item.name);
  const yData = props.data.map((item) => item.value);
  const { grid, tooltip, yAxis, xAxis, primaryColor, transparentColor } =
    echartsConfig.value;
  const series = [
    {
      type: "line",
      itemStyle: {
        color: primaryColor,
        width: 3,
      },
      ...props.option?.series,
      data: yData,
    },
  ];
  if (props.option?.series?.isArea) {
    series[0].areaStyle = {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: primaryColor,
        },
        {
          offset: 1,
          color: transparentColor,
        },
      ]),
    };
  }

  return {
    grid: {
      ...grid,
      ...props.option?.grid,
    },
    tooltip: {
      ...tooltip,
      ...props.option?.tooltip,
    },
    yAxis: {
      ...yAxis,
      ...props.option?.yAxis,
    },
    xAxis: {
      ...xAxis,
      ...props.option?.xAxis,
      data: xData,
    },
    series,
  };
});
</script>
