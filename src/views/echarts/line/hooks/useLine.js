import {
  reactive,
  onBeforeMount,
  onMounted,
  toRefs,
  computed,
  watch,
} from "vue";

export function useLine() {
  const state = reactive({
    lineData1: [
      { name: "1月", value: 1373 },
      { name: "2月", value: 3225 },
      { name: "3月", value: 2323 },
      { name: "4月", value: 3216 },
      { name: "5月", value: 2323 },
      { name: "6月", value: 3359 },
    ],
    lineOption1: {
      yAxis: {
        name: "单位/个",
      },
      grid: {
        top: 30,
      },
    },
    lineData2: [
      { name: "1月", value: 1373 },
      { name: "2月", value: 3225 },
      { name: "3月", value: 2323 },
      { name: "4月", value: 3216 },
      { name: "5月", value: 2323 },
      { name: "6月", value: 3359 },
    ],
    lineOption2: {
      grid: {
        top: 10,
      },
      series: {
        smooth: true,
        isArea: true,
      },
    },
    lineOption3: {
      yAxis: {
        name: "价格/元",
      },
      grid: {
        top: 30,
      },
    },
    lineData3: {
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
    lineOption4: {
      yAxis: {
        name: "价格/元",
      },
      grid: {
        top: 30,
      },
      series: {
        smooth: true,
        isArea: true,
      },
      legend: {
        right: 10,
      },
      colors: ["#0DB6FF", "#02C569", "#FCB323"],
    },
    lineData4: {
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
  });

  onBeforeMount(() => {});

  onMounted(() => {});
  return {
    ...toRefs(state),
  };
}
