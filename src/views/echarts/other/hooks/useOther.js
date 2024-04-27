import {
  reactive,
  onBeforeMount,
  onMounted,
  toRefs,
  computed,
  watch,
} from "vue";
import { useStore } from "vuex";

export function useOther() {
  const store = useStore();
  const state = reactive({
    gaugeData: { value: 180, unit: "次" },
    gaugeOption1: { max: 300, min: 0 },
    gaugeOption2: {
      max: 240,
      min: 0,
      startAngle: 200,
      endAngle: -20,
      splitNumber: 8,
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
    funnelData1: [
      { value: 150, name: "访问" },
      { value: 230, name: "咨询" },
      { value: 110, name: "订单" },
      { value: 70, name: "点击" },
      { value: 290, name: "展示" },
    ],
    funnelOption1: {
      series: {
        top: 60,
        bottom: 20,
        min: 0,
        max: 300,
        sort: "descending",
        gap: 2,
      },
    },
    funnelData2: [
      { value: 250, name: "访问" },
      { value: 230, name: "咨询" },
      { value: 310, name: "订单" },
      { value: 170, name: "点击" },
      { value: 490, name: "展示" },
    ],
    funnelOption2: {
      series: {
        top: 40,
        bottom: 30,
        min: 0,
        max: 500,
        sort: "ascending",
        gap: 2,
      },
    },
    liquidFillData: {
      name: "剩余空间",
      value: 0.5012,
    },
    liquidFillOption: {
      borderColor: "#1578D2",
      color: [
        "rgba(21,120,210,1)",
        "rgba(21,120,210,.6)",
        "rgba(121,157,200,.3)",
        "rgba(121,157,200,0.15)",
      ],
    },
  });

  const systemStyle = computed(() => {
    return store.state.app.systemStyle;
  });

  watch(
    () => systemStyle.value,
    (value) => {
      console.log(value);
      if (value === "black") {
        state.liquidFillOption = {
          borderColor: "#1578D2",
          color: [
            "rgba(21,120,210,1)",
            "rgba(21,120,210,.6)",
            "rgba(121,157,200,.3)",
            "rgba(121,157,200,0.15)",
          ],
        };
      }
      if (value === "dark") {
        state.liquidFillOption = {
          borderColor: "#1578D2",
          fontColor: "#fff",
          color: [
            "rgba(21,120,210,1)",
            "rgba(21,120,210,.6)",
            "rgba(121,157,200,.3)",
            "rgba(121,157,200,0.15)",
          ],
        };
      }
      if (value === "blue") {
        state.liquidFillOption = {
          borderColor: "#0FE0FF",
          fontColor: "#fff",
          color: [
            "rgba(15,224,255,1)",
            "rgba(15,224,255,.6)",
            "rgba(15,224,255,.3)",
            "rgba(15,224,255,0.15)",
          ],
        };
      }
    }
  );

  onBeforeMount(() => {});

  onMounted(() => {});
  return {
    ...toRefs(state),
  };
}
