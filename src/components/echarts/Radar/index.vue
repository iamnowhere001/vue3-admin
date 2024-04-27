<template>
  <v-chart
    class="chart"
    ref="radarChartRef"
    :option="option"
    :autoresize="true"
  />
</template>

<script setup>
import { use } from "echarts/core";
import { RadarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
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
  RadarChart,
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
    default: () => [],
  },
});

const store = useStore();
const echartsConfig = computed(() => {
  return store.getters["app/echartConfig"];
});

const option = computed(() => {
  const {
    grid,
    legend,
    tooltip,
    colors,
    borderColor,
    fontColor,
    backgroundColor,
  } = echartsConfig.value;
  const color = props.option?.colors ?? [...colors];
  return {
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
      trigger: "item",
      ...props.option?.tooltip,
    },
    color,
    radar: {
      axisLine: {
        lineStyle: {
          color: fontColor,
        },
      },
      splitLine: {
        lineStyle: {
          color: borderColor,
        },
      },
      splitArea: {
        areaStyle: {
          color: backgroundColor,
        },
      },
      ...props.option?.radar,
    },
    series: [
      {
        name: "",
        type: "radar",
        areaStyle: {
          opacity: 0.5,
        },
        symbolSize: 6,
        ...props.option?.series,
        data: props.data,
      },
    ],
  };
});
</script>
