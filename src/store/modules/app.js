import {
  bgImgVisible,
  systemStyle,
  isCollapse,
  topMenuVisible,
  leftMenuVisible,
  tagsVisible,
  menuSeparate,
} from "@/config";
import theme from "@/components/echarts/theme";
import createEchartsConfig from "@/components/echarts/config";

const state = () => ({
  bgImgVisible: bgImgVisible, // 是否显示背景图片
  systemStyle: systemStyle, //整体风格
  isCollapse: isCollapse, // 侧边栏是否收缩展示
  topMenuVisible: topMenuVisible, //顶部菜单是否显示
  leftMenuVisible: leftMenuVisible, //左侧菜单是否显示
  tagsVisible: tagsVisible, //标签页是否显示
  menuSeparate: menuSeparate, //一二级菜单是否分离
  contentFullScreen: false, // 内容是否可全屏展示
  showLogo: true, // 是否显示Logo
  fixedTop: false, // 是否固定顶部, todo，暂未使用
  showTabs: true, // 是否显示导航历史
  expandOneMenu: true, // 一次是否只能展开一个菜单
  elementSize: "mini", // element默认尺寸，支持官网四个大小参数
});

const getters = {
  echartConfig(state) {
    const themeObj = theme[state.systemStyle];
    return createEchartsConfig(themeObj);
  },
};

// mutations
const mutations = {
  stateChange(state, option) {
    state[option.name] = option.value;
  },
};

// actions
const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
