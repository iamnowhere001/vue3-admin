export default function createTooltip({
  backgroundColor,
  borderColor,
  fontColor,
}) {
  return {
    trigger: "axis",
    backgroundColor,
    borderColor,
    textStyle: {
      color: fontColor,
      fontSize: 14,
    },
  };
}
