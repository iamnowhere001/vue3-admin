<template>
  <v-chart class="chart" ref="lineChart" :option="option" :autoresize="true" />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";

import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { computed } from "vue";
import { useStore } from "vuex";

use([
  CanvasRenderer,
  BarChart,
  TooltipComponent,
  GridComponent,
  LegendComponent,
]);

const props = defineProps({
  option: {
    type: Object,
    default: () => {},
  },
  data: {
    type: Object,
    default: () => ({
      legend: ["增长率", "系列1", "系列2"],
      list: [
        { name: "1月", value1: 10, value2: 200, value3: 300 },
        { name: "2月", value1: 20, value2: 400, value3: 400 },
        { name: "3月", value1: 25, value2: 200, value3: 300 },
        { name: "4月", value1: 20, value2: 100, value3: 300 },
        { name: "5月", value1: 35, value2: 300, value3: 500 },
        { name: "6月", value1: 43, value2: 500, value3: 200 },
      ],
    }),
  },
});
const store = useStore();

const echartsConfig = computed(() => {
  return store.getters["app/echartConfig"];
});

const option = computed(() => {
  const xData = props.data.list.map((item) => item.name);
  const { grid, legend, tooltip, yAxis, xAxis, colors } = echartsConfig.value;
  const color = props.option?.colors ?? [...colors];
  const series = props.data.legend.map((item, index) => {
    const yData = props.data.list.map((itm) => itm["value" + (index + 1)]);
    let obj = {
      type: index === 0 ? "line" : "bar",
      yAxisIndex: index === 0 ? 1 : 0,
      name: item,
      ...props.option?.series,
      data: yData,
    };
    return obj;
  });

  return {
    color,
    legend: {
      ...legend,
      ...props.option?.legend,
    },
    grid: {
      ...grid,
      ...props.option?.grid,
    },
    tooltip: {
      ...tooltip,
      ...props.option?.tooltip,
    },
    yAxis: [
      {
        ...yAxis,
        ...props.option?.yAxis,
        name: props.option?.yAxis.name1,
      },
      {
        ...yAxis,
        ...props.option?.yAxis,
        name: props.option?.yAxis.name2,
      },
    ],
    xAxis: {
      ...xAxis,
      ...props.option?.xAxis,
      data: xData,
    },
    series,
  };
});
</script>
