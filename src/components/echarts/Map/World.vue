<template>
  <v-chart
    class="chart"
    ref="mapChartRef"
    :option="option"
    :autoresize="true"
  />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { MapChart, LinesChart } from "echarts/charts";
import * as echarts from "echarts";
import worldMap from "/public/map/geoJson/world.json";
import worldCoords from "/public/map/coords/WorldCountry.js";
import countryArr from "/public/map/country.js";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import seriesOption, { visualMap } from "../config/map";

use([
  CanvasRenderer,
  MapChart,
  LinesChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

const props = defineProps({
  option: {
    type: Object,
    default: () => ({}),
  },
  data: {
    type: Object,
    default: () => ({}),
  },
});

const store = useStore();

const echartsConfig = computed(() => {
  return store.getters["app/echartConfig"];
});
const nameMap = createNameMap();

const option = computed(() => {
  const { fontColor, mapColor, visualColors, tooltip } = echartsConfig.value;
  const series = createSeries();
  let visualMax = 1000;
  let visualMin = 0;
  if (props.data?.map?.length > 0) {
    const visualList = props.data.map.map((item) => item.value);
    visualMax = Math.max.apply(null, visualList);
    visualMin = Math.min.apply(null, visualList);
  }

  // console.log(series, "series");
  return {
    tooltip: {
      ...tooltip,
      ...props.option?.tooltip,
      trigger: "item",
    },
    visualMap: {
      ...visualMap,
      textStyle: {
        color: fontColor,
        fontFamily: "MicrosoftYaHei, MicrosoftYaHei-Regular",
        fontSize: 12,
      },
      seriesIndex: 0,
      max: visualMax,
      min: visualMin,
      text: [visualMax, visualMin],
      inRange: {
        color: visualColors,
      },
    },
    geo: [
      {
        show: true,
        map: "world",
        nameMap,
        itemStyle: {
          areaColor: mapColor.area,
          borderWidth: 1,
          borderColor: mapColor.border,
        },
        label: {
          show: true,
          formatter: (params) => {
            const name = params.name;
            if (props.data.map) {
              const item = props.data.map.find((itm) => itm.name === name);
              if (item) {
                return name;
              }
            }
            return "";
          },
          color: mapColor.font,
        },
      },
    ],
    series,
  };
});

function createSeries() {
  const { mapColor } = echartsConfig.value;
  let list = [];
  const types = ["map", "scatter", "effectScatter", "lines"];
  types.forEach((item) => {
    const arr = props.data[item];
    if (arr) {
      if (item === "map") {
        list.push({
          ...seriesOption[item],
          map: "world",
          nameMap,
          name: props.option?.mapName ?? "",
          data: arr,
        });
      }
      if (item === "scatter" || item === "effectScatter") {
        list.push({
          ...seriesOption[item],
          itemStyle: {
            color: mapColor.scatter,
          },
          data: coordsFmt(arr),
          label: {
            show: false,
            formatter: (params) => {
              return params.name;
            },
          },
        });
      }
      if (item === "lines") {
        const target = arr[0];
        const sourceList = arr.slice(1);
        const linesData = sourceList.map((item) => {
          const targetPoint = worldCoords[target.name];
          const sourcePoint = worldCoords[item.name];
          return [sourcePoint, targetPoint];
        });
        list.push({
          ...seriesOption[item],
          data: linesData,
        });
      }
    }
  });
  return list;
}

function createNameMap() {
  let obj = {};
  countryArr.forEach((item) => {
    obj[item.en] = item.cn;
  });
  return obj;
}

function coordsFmt(arr) {
  const filterArr = arr.filter((item) => worldCoords[item.name]);
  const list = filterArr.map((item) => {
    return {
      name: item.name,
      value: [...worldCoords[item.name], item.value],
    };
  });
  return list;
}

onBeforeMount(() => {
  echarts.registerMap("world", worldMap);
});
</script>
