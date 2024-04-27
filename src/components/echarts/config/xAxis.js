export default function createXAxis({
  axisLineColor,
  splitLineColor,
  fontColor,
}) {
  return {
    type: "category",
    axisTick: {
      show: false,
    },
    nameTextStyle: {
      fontSize: "14px",
      fontFamily: "MicrosoftYaHei, MicrosoftYaHei-Regular",
      color: fontColor,
    },
    axisLabel: {
      color: fontColor,
      fontSize: 14,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: axisLineColor,
      },
    },
    axisTick: {
      show: true,
      alignWithLabel: true,
      lineStyle: {
        width: 2,
        color: axisLineColor,
      },
    },
    boundaryGap: true,
    splitLine: {
      lineStyle: {
        color: splitLineColor,
      },
    },
  };
}
