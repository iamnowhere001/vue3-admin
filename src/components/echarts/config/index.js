import createXAxis from "./xAxis";
import createYAxis from "./yAxis";
import gridConfig from "./grid";
import createTooltip from "./tooltip";
import createLegend from "./legend";

export default function createEchartsConfig(config) {
  return {
    grid: gridConfig,
    legend: createLegend(config),
    tooltip: createTooltip(config),
    xAxis: createXAxis(config),
    yAxis: createYAxis(config),
    primaryColor: config.primaryColor,
    transparentColor: config.transparentColor,
    colors: config.colors,
    fontColor: config.fontColor,
    borderColor: config.borderColor,
    backgroundColor: config.backgroundColor,
    mapColor: config.mapColor,
    visualColors: config.visualColors,
  };
}
