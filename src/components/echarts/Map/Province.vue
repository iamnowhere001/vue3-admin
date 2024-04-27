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
  province: {
    type: String,
    default: "北京市",
  },
});

let provinceCoord = {};
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
        map: "province",
        roam: true,
        zoom: 1.2,
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
          map: "province",
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
          const targetPoint = provinceCoord[target.name];
          const sourcePoint = provinceCoord[item.name];
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

function coordsFmt(arr) {
  const filterArr = arr.filter((item) => provinceCoord[item.name]);
  const list = filterArr.map((item) => {
    return {
      name: item.name,
      value: [...provinceCoord[item.name], item.value],
    };
  });
  return list;
}

onBeforeMount(() => {
  const provinceMap = require(`/public/map/geoJson/provinces/${props.province}.json`);
  echarts.registerMap("province", provinceMap);

  const provinceCoordList = provinceMap.features.map((item) => item.properties);
  provinceCoordList.forEach((item) => {
    provinceCoord[item.name] = item.cp;
  });
});
</script>
