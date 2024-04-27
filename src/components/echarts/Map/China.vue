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
import chinaMap from "/public/map/geoJson/china.json";
import chinaCoords from "/public/map/coords/ChinaCity.js";
import provinceNameMap from "/public/map/ChinaNameMap.js";
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

  console.log(series, "series");
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
        map: "china",
        nameMap: provinceNameMap,
        roam: true,
        zoom: 1.25,
        itemStyle: {
          areaColor: mapColor.area,
          borderWidth: 1,
          borderColor: mapColor.border,
        },
        label: {
          show: true,
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
          map: "china",
          nameMap: provinceNameMap,
          name: props.option?.mapName ?? "",
          data: nameMapFmt(arr),
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
          const targetName = provinceNameMap[target.name] ?? target.name;
          const targetPoint = chinaCoords[targetName];
          const name = provinceNameMap[item.name] ?? item.name;
          const sourcePoint = chinaCoords[name] ?? targetPoint;
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

function nameMapFmt(arr) {
  const list = arr.map((province) => {
    return {
      ...province,
      name: provinceNameMap[province.name] ?? province.name,
    };
  });
  return list;
}

function coordsFmt(arr) {
  const filterArr = arr.filter((item) => {
    const name = provinceNameMap[item.name] ?? item.name;
    return chinaCoords[name];
  });
  const list = filterArr.map((item) => {
    const name = provinceNameMap[item.name] ?? item.name;
    return {
      name: name,
      value: [...chinaCoords[name], item.value],
    };
  });
  return list;
}

onBeforeMount(() => {
  echarts.registerMap("china", chinaMap);
});
</script>
