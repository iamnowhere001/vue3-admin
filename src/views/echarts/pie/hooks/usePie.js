import {
  reactive,
  onBeforeMount,
  onMounted,
  toRefs,
  computed,
  watch,
} from "vue";

export function usePie() {
  const state = reactive({
    data: [
      { name: "Java", value: 200 },
      { name: "JavaScript", value: 100 },
      { name: "Python", value: 300 },
      { name: "Go", value: 200 },
      { name: "PHP", value: 20 },
      { name: "C++", value: 120 },
    ],
    option1: {
      legend: {
        show: false,
      },
    },
    option2: {
      legend: {
        orient: "vertical",
        right: 50,
        top: "center",
      },
      series: {
        radius: [0, 80],
        center: ["30%", "50%"],
        label: {
          show: false,
        },
      },
    },
    option3: {
      legend: {
        orient: "vertical",
        right: 50,
        top: "center",
      },
      series: {
        radius: [40, 80],
        center: ["30%", "50%"],
        label: {
          show: false,
        },
      },
    },
    option4: {
      legend: {
        show: false,
      },
      series: {
        radius: [0, 80],
        roseType: "radius",
      },
    },
  });

  onBeforeMount(() => {});

  onMounted(() => {});
  return {
    ...toRefs(state),
  };
}
