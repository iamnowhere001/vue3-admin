<template>
  <v-chart
    class="chart"
    ref="liquidFillChart"
    :option="option"
    :autoresize="true"
  />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import VChart from "vue-echarts";
import "echarts-liquidfill/src/liquidFill.js";
import { TitleComponent, GraphicComponent } from "echarts/components";
import { computed } from "vue";
import { useStore } from "vuex";

use([CanvasRenderer, TitleComponent, GraphicComponent]);

const props = defineProps({
  option: {
    type: Object,
    default: () => ({
      borderColor: "#D09322",
      color: ["rgba(210,168,8,1)", "rgba(210,168,8,.6)", "rgba(210,168,8,.3)"],
      fontColor: "#f2d818",
    }),
  },
  data: {
    type: Object,
    default: () => ({
      name: "百分比",
      value: 0,
    }),
  },
});
const store = useStore();
const echartsConfig = computed(() => {
  return store.getters["app/echartConfig"];
});

const option = computed(() => {
  const value = props.data.value;
  const data = [value, value];

  const { backgroundColor } = echartsConfig.value;
  const fontColor = props.option.fontColor ?? backgroundColor;
  return {
    title: {
      text: (value * 100).toFixed(2) + "{a|%}",
      textStyle: {
        fontSize: 22,
        fontFamily: "Microsoft Yahei",
        fontWeight: "normal",
        color: fontColor,
        rich: {
          a: {
            fontSize: 14,
          },
        },
      },
      x: "center",
      y: "40%",
    },
    graphic: [
      {
        type: "group",
        left: "center",
        top: "60%",
        children: [
          {
            type: "text",
            z: 100,
            left: "10",
            top: "middle",
            style: {
              fill: fontColor,
              text: props.data.name,
              font: "14px Microsoft YaHei",
            },
          },
        ],
      },
    ],
    series: [
      {
        type: "liquidFill",
        radius: "50%",
        center: ["50%", "50%"],
        data: data,
        backgroundStyle: {
          borderWidth: 2,
          borderColor: props.option.borderColor,
          color: "rgba(210,168,8,0)",
        },
        outline: {
          show: false,
        },
        color: props.option.color,
        label: {
          formatter: "",
        },
      },
    ],
  };
});
</script>
