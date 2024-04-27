export default function createYAxis({
  axisLineColor,
  splitLineColor,
  fontColor,
}) {
  return {
    type: "value",
    name: "",
    nameTextStyle: {
      fontSize: "14px",
      fontFamily: "MicrosoftYaHei, MicrosoftYaHei-Regular",
      color: fontColor,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: axisLineColor,
      },
    },
    axisLabel: {
      color: fontColor,
      fontSize: 14,
      fontFamily: "Helvetica",
    },
    splitLine: {
      lineStyle: {
        color: splitLineColor,
        opacity: 0.5,
      },
    },
  };
}
