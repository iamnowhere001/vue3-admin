<template>
  <v-chart class="chart" ref="lineChart" :option="option" :autoresize="true" />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import * as echarts from "echarts";
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
      legend: ["系列1", "系列2", "系列3"],
      list: [
        { name: "1月", value1: 100, value2: 200, value3: 300 },
        { name: "2月", value1: 200, value2: 400, value3: 400 },
        { name: "3月", value1: 300, value2: 200, value3: 300 },
        { name: "4月", value1: 400, value2: 100, value3: 300 },
        { name: "5月", value1: 300, value2: 300, value3: 500 },
        { name: "6月", value1: 700, value2: 500, value3: 200 },
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
  const { grid, legend, tooltip, yAxis, xAxis, transparentColor, colors } =
    echartsConfig.value;
  const color = props.option?.colors ?? [...colors];
  const series = props.data.legend.map((item, index) => {
    const yData = props.data.list.map((itm) => itm["value" + (index + 1)]);
    let obj = {
      type: "bar",
      name: item,
      ...props.option?.series,
      data: yData,
    };
    if (props.option?.series?.isStack) {
      obj.stack = "group";
    }
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
