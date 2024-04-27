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
import { FunnelChart } from "echarts/charts";
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
  FunnelChart,
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
      { value: 60, name: "Visit" },
      { value: 40, name: "Inquiry" },
      { value: 20, name: "Order" },
      { value: 80, name: "Click" },
      { value: 100, name: "Show" },
    ],
  },
});

const store = useStore();
const echartsConfig = computed(() => {
  return store.getters["app/echartConfig"];
});
const option = computed(() => {
  const { grid, legend, tooltip, colors, borderColor } = echartsConfig.value;
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
    series: [
      {
        type: "funnel",
        left: "10%",
        top: 60,
        bottom: 60,
        width: "80%",
        min: 0,
        max: 100,
        minSize: "0%",
        maxSize: "100%",
        sort: "descending",
        gap: 2,
        label: {
          show: true,
          position: "inside",
          color: "#fff",
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid",
            color: borderColor,
          },
        },
        itemStyle: {
          borderColor: borderColor,
          borderWidth: 1,
        },
        ...props.option?.series,
        data: props.data,
      },
    ],
  };
});
</script>
