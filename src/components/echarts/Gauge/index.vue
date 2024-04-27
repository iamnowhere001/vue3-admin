<template>
  <v-chart
    class="chart"
    ref="gaugeChartRef"
    :option="option"
    :autoresize="true"
  />
</template>

<script setup>
import { use } from "echarts/core";
import { GaugeChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import VChart from "vue-echarts";
import { computed } from "vue";
import { useStore } from "vuex";

use([CanvasRenderer, GaugeChart]);

const props = defineProps({
  option: {
    type: Object,
    default: () => {},
  },
  data: {
    type: Object,
    default: () => ({ value: 50, unit: "km/h" }),
  },
});
const store = useStore();

const echartsConfig = computed(() => {
  return store.getters["app/echartConfig"];
});

const option = computed(() => {
  const { colors, borderColor } = echartsConfig.value;
  return {
    series: [
      {
        type: "gauge",
        axisLine: {
          lineStyle: {
            width: 16,
            color: [
              [0.25, colors[3]],
              [0.5, colors[1]],
              [0.75, colors[2]],
              [1, colors[7]],
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: "inherit",
          },
        },
        axisTick: {
          distance: -16,
          length: 8,
          lineStyle: {
            color: borderColor,
            width: 1,
          },
        },
        splitLine: {
          distance: -48,
          length: 30,
          lineStyle: {
            width: 0,
          },
        },
        axisLabel: {
          color: "inherit",
          distance: 40,
          fontSize: 16,
        },
        detail: {
          valueAnimation: true,
          formatter: `{value} ${props.data.unit}`,
          color: "inherit",
          fontSize: 18,
        },
        ...props?.option,
        data: [
          {
            value: props.data.value,
          },
        ],
      },
    ],
  };
});
</script>
