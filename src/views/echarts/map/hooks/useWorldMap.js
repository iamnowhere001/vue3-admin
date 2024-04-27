import {
  reactive,
  onBeforeMount,
  onMounted,
  toRefs,
  computed,
  watch,
} from "vue";

import { getWorldMap, getChinaMap, getProvinceMap } from "@/api/echarts/map";

export function useWorldMap() {
  const state = reactive({
    mapData: [],
    option: {
      mapName: "增加数量",
    },
    chinaData: [],
    provinceData: [],
  });

  async function getWorldMapData() {
    const res = await getWorldMap();
    if (res.code === 200) {
      state.mapData = res.data;
    }
  }

  async function getChinaMapData() {
    const res = await getChinaMap();
    if (res.code === 200) {
      let list = [];
      res.data.forEach((item) => {
        const index = list.findIndex((itm) => itm.name === item.name);
        if (index === -1) {
          list.push(item);
        } else {
          list[index].value = item.value;
        }
      });
      state.chinaData = list;
    }
  }

  async function getProvinceMapData() {
    const res = await getProvinceMap();
    if (res.code === 200) {
      let list = [];
      res.data.forEach((item) => {
        const index = list.findIndex((itm) => itm.name === item.name);
        if (index === -1) {
          list.push(item);
        } else {
          list[index].value = item.value;
        }
      });
      state.provinceData = list;
    }
  }

  onBeforeMount(() => {
    getWorldMapData();
    getChinaMapData();
    getProvinceMapData();
  });

  onMounted(() => {});
  return {
    ...toRefs(state),
  };
}
