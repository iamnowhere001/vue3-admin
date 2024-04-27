import {
  reactive,
  onBeforeMount,
  onMounted,
  toRefs,
  computed,
  watch,
} from "vue";

export function useBar() {
  const state = reactive({
    barData1: [
      { name: "1月", value: 1373 },
      { name: "2月", value: 3225 },
      { name: "3月", value: 2323 },
      { name: "4月", value: 3216 },
      { name: "5月", value: 2323 },
      { name: "6月", value: 3359 },
    ],
    barOption1: {
      yAxis: {
        name: "单位/个",
      },
      grid: {
        top: 30,
      },
    },
    barOption2: {
      yAxis: {
        name: "价格/元",
      },
      grid: {
        top: 30,
      },
    },
    barData2: {
      legend: ["显卡", "内存", "CPU"],
      list: [
        { name: "1月", value1: 5100, value2: 1200, value3: 2300 },
        { name: "2月", value1: 4600, value2: 1400, value3: 2400 },
        { name: "3月", value1: 4300, value2: 1200, value3: 2300 },
        { name: "4月", value1: 4900, value2: 2100, value3: 2300 },
        { name: "5月", value1: 4300, value2: 2300, value3: 2500 },
        { name: "6月", value1: 3700, value2: 1500, value3: 2200 },
      ],
    },
    barOption3: {
      yAxis: {
        name: "价格/元",
      },
      grid: {
        top: 30,
      },
      series: {
        isStack: true,
        barWidth: 12,
      },
      legend: {
        right: 10,
      },
      colors: ["#0DB6FF", "#02C569", "#FCB323"],
    },
    barData3: {
      legend: ["显卡", "内存", "CPU"],
      list: [
        { name: "1月", value1: 5100, value2: 1200, value3: 2300 },
        { name: "2月", value1: 4600, value2: 1400, value3: 2400 },
        { name: "3月", value1: 4300, value2: 1200, value3: 2300 },
        { name: "4月", value1: 4900, value2: 2100, value3: 2300 },
        { name: "5月", value1: 4300, value2: 2300, value3: 2500 },
        { name: "6月", value1: 3700, value2: 1500, value3: 2200 },
      ],
    },
    barOption4: {
      yAxis: {
        name1: "价格/元",
        name2: "%",
      },
      grid: {
        top: 30,
      },
      series: {
        isStack: true,
        barWidth: 12,
      },
      colors: ["#FCB323", "#0DB6FF", "#02C569"],
    },
    barData4: {
      legend: ["增长率", "内存", "CPU"],
      list: [
        { name: "1月", value1: 51, value2: 1200, value3: 2300 },
        { name: "2月", value1: 46, value2: 1400, value3: 2400 },
        { name: "3月", value1: 43, value2: 1200, value3: 2300 },
        { name: "4月", value1: 49, value2: 2100, value3: 2300 },
        { name: "5月", value1: 43, value2: 2300, value3: 2500 },
        { name: "6月", value1: 37, value2: 1500, value3: 2200 },
      ],
    },
    barOption5: {
      xAxis: {
        name: "单位/个",
      },
      grid: {
        top: 0,
        right: 68,
      },
    },
  });

  onBeforeMount(() => {});

  onMounted(() => {});
  return {
    ...toRefs(state),
  };
}
