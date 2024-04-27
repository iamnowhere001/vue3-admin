//热力图
export const mapOption = {
  type: "map",
  geoIndex: 0,
  name: "",
  map: "china",
  zlevel: 4,
  label: {
    show: false,
  },
  data: [],
};

//散点
export const scatterOption = {
  type: "scatter",
  coordinateSystem: "geo",
  geoIndex: 0,
  itemStyle: {
    color: "#fff",
  },
  zlevel: 4,
  data: [],
};

//带有涟漪特效动画的散点
export const effectScatterOption = {
  type: "effectScatter",
  coordinateSystem: "geo",
  geoIndex: 0,
  showEffectOn: "render",
  rippleEffect: {
    brushType: "stroke",
  },
  itemStyle: {
    color: "#fff",
  },
  emphasis: { scale: true },
  zlevel: 4,
  data: [],
};

//飞线
export const linesOption = {
  type: "lines",
  coordinateSystem: "geo",
  geoIndex: 0,
  zlevel: 4,
  effect: {
    show: true,
    period: 5,
    trailLength: 0.4,
    color: "#fff",
    symbolSize: 5,
    symbol: "arrow",
  },
  lineStyle: {
    color: {
      type: "linear",
      x: 0,
      y: 0,
      x2: 0,
      y2: 0.98,
      colorStops: [
        {
          offset: 0,
          color: "#FF8823", // 0% 处的颜色
        },
        {
          offset: 1,
          color: "#ffea2f", // 100% 处的颜色
        },
      ],
      global: false, // 缺省为 false
    },
    width: 1,
    curveness: 0.5,
  },
  data: [],
};

//映射
export const visualMap = {
  show: true,
  type: "continuous",
  orient: "vertical",
  left: 40,
  bottom: 20,
  itemWidth: 12,
  itemHeight: 80,
  // min: 0,
  max: 1000,
  text: [1000, 0],
  inverse: true,
  textStyle: {
    color: "red",
    fontFamily: "MicrosoftYaHei, MicrosoftYaHei-Regular",
    fontSize: 12,
  },
  splitNumber: 4,
};

export default {
  scatter: scatterOption,
  effectScatter: effectScatterOption,
  map: mapOption,
  lines: linesOption,
};
