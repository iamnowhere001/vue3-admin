import { reactive, onBeforeMount, onMounted, toRefs, computed } from "vue";
import { getChinaMap } from "@/api/echarts/map";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export function useHome() {
  const router = useRouter();
  const store = useStore();
  const state = reactive({
    lineData: [
      { name: "1月", value: 1373 },
      { name: "2月", value: 3225 },
      { name: "3月", value: 2323 },
      { name: "4月", value: 3216 },
      { name: "5月", value: 2323 },
      { name: "6月", value: 3359 },
      { name: "7月", value: 1382 },
      { name: "8月", value: 3561 },
      { name: "9月", value: 6341 },
      { name: "10月", value: 2345 },
      { name: "11月", value: 3218 },
      { name: "12月", value: 5421 },
    ],
    lineOption: {
      yAxis: {
        name: "单位/个",
      },
      grid: {
        top: 30,
      },
    },
    barData: [
      { name: "1月", value: 1373 },
      { name: "2月", value: 3225 },
      { name: "3月", value: 2323 },
      { name: "4月", value: 3216 },
      { name: "5月", value: 2323 },
      { name: "6月", value: 3359 },
      { name: "7月", value: 1382 },
      { name: "8月", value: 3561 },
      { name: "9月", value: 6341 },
      { name: "10月", value: 2345 },
      { name: "11月", value: 3218 },
      { name: "12月", value: 5421 },
    ],
    barOption: {
      yAxis: {
        name: "单位/个",
      },
      grid: {
        top: 30,
      },
      series: {
        barWidth: 20,
      },
    },
    pieData: [
      { name: "Java", value: 200 },
      { name: "JavaScript", value: 100 },
      { name: "Python", value: 300 },
      { name: "Go", value: 200 },
      { name: "PHP", value: 20 },
      { name: "C++", value: 120 },
    ],
    pieOption: {
      legend: {
        orient: "vertical",
        right: 100,
        top: "center",
      },
      series: {
        radius: [0, 100],
        center: ["30%", "50%"],
        label: {
          show: false,
        },
      },
    },
    radarOption: {
      legend: {
        orient: "vertical",
        right: 10,
      },
      radar: {
        indicator: [
          { name: "销售" },
          { name: "管理" },
          { name: "信息技术" },
          { name: "客服" },
          { name: "研发" },
          { name: "市场" },
        ],
      },
    },
    radarData: [
      {
        value: [4200, 3000, 20000, 35000, 50000, 18000],
        name: "2020年",
      },
      {
        value: [5000, 14000, 28000, 26000, 42000, 21000],
        name: "2021年",
      },
      {
        value: [3000, 9000, 18000, 22000, 32000, 19000],
        name: "2022年",
      },
    ],
    chinaData: [],
    mapOption: {
      mapName: "增加数量",
    },
    mapping: [
      { value: 1, label: "类型1" },
      { value: 2, label: "类型2" },
      { value: 3, label: "类型3" },
    ],
  });

  const title = computed(() => {
    return store.state.user.systemTitle;
  });

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

  function gotoMore(url) {
    router.push(url);
  }

  onBeforeMount(() => {
    getChinaMapData();
  });

  onMounted(() => {});
  return {
    ...toRefs(state),
    gotoMore,
    title,
  };
}
