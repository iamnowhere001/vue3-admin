<template>
  <v-chart
    class="chart"
    ref="PieChartRef"
    :option="option"
    :autoresize="true"
  />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
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
  PieChart,
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
  const { grid, tooltip, colors, fontColor, legend } = echartsConfig.value;
  const color = props.option?.colors ?? [...colors];
  const total = props.data.reduce((total, item) => item.value + total, 0);

  return {
    color,
    grid: {
      ...grid,
      ...props.option?.grid,
    },
    legend: {
      ...legend,
      ...props.option?.legend,
      formatter: (params) => {
        const item = props.data.find((i) => i.name === params);
        if (item) {
          return `${params}\n${item.value} ${(
            (item.value * 100) /
            total
          ).toFixed(2)}%`;
        }
        return params;
      },
    },
    tooltip: {
      ...tooltip,
      ...props.option?.tooltip,
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: [0, 80],
        center: ["50%", "50%"],
        label: {
          fontSize: 14,
          color: fontColor,
          formatter: "{b}\n{c} {d}%",
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}：{c} {d}%",
        },
        ...props.option?.series,
        data: props.data,
      },
    ],
  };
});
</script>
