export default function createLegend({ fontColor }) {
  return {
    itemWidth: 9,
    itemHeight: 9,
    itemGap: 12,
    textStyle: {
      color: fontColor,
      fontFamily: "PingFangSC",
      fontSize: 14,
    },
  };
}
