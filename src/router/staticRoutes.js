const Layout = () => import(/* webpackChunkName: "layout" */ "@/layout");
const Home = () => import(/* webpackChunkName: "home" */ "@/views/home");
const baseTable = () =>
  import(/* webpackChunkName: "baseTable" */ "@/views/table/table-base");
const checkboxTable = () =>
  import(
    /* webpackChunkName: "checkboxTable" */ "@/views/table/table-checkbox"
  );
const treeTable = () =>
  import(/* webpackChunkName: "treeTable" */ "@/views/table/table-tree");
const multiplePage = () =>
  import(/* webpackChunkName: "multiplePage" */ "@/views/page/page-multiple");
const processPage = () =>
  import(/* webpackChunkName: "processPage" */ "@/views/page/page-process");
const pageHook = () =>
  import(/* webpackChunkName: "pageHook" */ "@/views/hooks/hook-page");
const otherHook = () =>
  import(/* webpackChunkName: "otherHook" */ "@/views/hooks/hook-other");
const demo = () =>
  import(/* webpackChunkName: "demo" */ "@/views/hooks/demo");
const elementIcons = () =>
  import(/* webpackChunkName: "elementIcons" */ "@/views/element/icons");
const elementRadio = () =>
  import(/* webpackChunkName: "elementRadio" */ "@/views/element/radio");
const elementCheckbox = () =>
  import(/* webpackChunkName: "elementCheckbox" */ "@/views/element/checkbox");
const elementInput = () =>
  import(/* webpackChunkName: "elementInput" */ "@/views/element/input");
const elementInputNumber = () =>
  import(
    /* webpackChunkName: "elementInputNumber" */ "@/views/element/input-number"
  );
const elementSelect = () =>
  import(/* webpackChunkName: "elementSelect" */ "@/views/element/select");
const elementButtons = () =>
  import(/* webpackChunkName: "elementButtons" */ "@/views/element/buttons");
import(/* webpackChunkName: "elementInput" */ "@/views/element/input");
const elementTimePicker = () =>
  import(
    /* webpackChunkName: "elementTimePicker" */ "@/views/element/time-picker"
  );
const elementDatePicker = () =>
  import(
    /* webpackChunkName: "elementDatePicker" */ "@/views/element/date-picker"
  );
const elementDateTimePicker = () =>
  import(
    /* webpackChunkName: "elementDateTimePicker" */ "@/views/element/date-time-picker"
  );
const elementSwitch = () =>
  import(/* webpackChunkName: "elementSwitch" */ "@/views/element/switch");
const elementSlider = () =>
  import(/* webpackChunkName: "elementSlider" */ "@/views/element/slider");
const elementRate = () =>
  import(/* webpackChunkName: "elementRate" */ "@/views/element/rate");
const elementText = () =>
  import(/* webpackChunkName: "elementText" */ "@/views/element/text");
const elementLink = () =>
  import(/* webpackChunkName: "elementLink" */ "@/views/element/link");
const elementTransfer = () =>
  import(/* webpackChunkName: "elementTransfer" */ "@/views/element/transfer");
const elementCascader = () =>
  import(/* webpackChunkName: "elementCascader" */ "@/views/element/cascader");
const elementCollapse = () =>
  import(/* webpackChunkName: "elementCollapse" */ "@/views/element/collapse");
const elementDescriptions = () =>
  import(
    /* webpackChunkName: "elementDescriptions" */ "@/views/element/descriptions"
  );
const elementPagination = () =>
  import(
    /* webpackChunkName: "elementPagination" */ "@/views/element/pagination"
  );
const elementProgress = () =>
  import(/* webpackChunkName: "elementProgress" */ "@/views/element/progress");
const elementTree = () =>
  import(/* webpackChunkName: "elementTree" */ "@/views/element/tree");
const elementTable = () =>
  import(/* webpackChunkName: "elementTable" */ "@/views/element/table");
const elementTabs = () =>
  import(/* webpackChunkName: "elementTabs" */ "@/views/element/tabs");
const elementSteps = () =>
  import(/* webpackChunkName: "elementSteps" */ "@/views/element/steps");
const elementDialog = () =>
  import(/* webpackChunkName: "elementDialog" */ "@/views/element/dialog");
const elementTooltip = () =>
  import(/* webpackChunkName: "elementTooltip" */ "@/views/element/tooltip");
const elementPopover = () =>
  import(/* webpackChunkName: "elementPopover" */ "@/views/element/popover");
const elementPopconfirm = () =>
  import(
    /* webpackChunkName: "elementPopconfirm" */ "@/views/element/popconfirm"
  );
const elementTag = () =>
  import(/* webpackChunkName: "elementTag" */ "@/views/element/tag");
const elementTimeline = () =>
  import(/* webpackChunkName: "elementTimeline" */ "@/views/element/timeline");
const elementMessageBox = () =>
  import(
    /* webpackChunkName: "elementMessageBox" */ "@/views/element/message-box"
  );
const elementNotification = () =>
  import(
    /* webpackChunkName: "elementNotification" */ "@/views/element/notification"
  );
const elementAlert = () =>
  import(/* webpackChunkName: "elementAlert" */ "@/views/element/alert");
const elementDrawer = () =>
  import(/* webpackChunkName: "elementDrawer" */ "@/views/element/drawer");
const elementStatistic = () =>
  import(
    /* webpackChunkName: "elementStatistic" */ "@/views/element/statistic"
  );
const elementDropdown = () =>
  import(/* webpackChunkName: "elementDropdown" */ "@/views/element/dropdown");
const elementDivider = () =>
  import(/* webpackChunkName: "elementDivider" */ "@/views/element/divider");

const baseForm = () =>
  import(/* webpackChunkName: "baseForm" */ "@/views/form/form-base");
const multipleForm = () =>
  import(/* webpackChunkName: "multipleForm" */ "@/views/form/form-multiple");
const echartsLine = () =>
  import(/* webpackChunkName: "echartsLine " */ "@/views/echarts/line");
const echartsBar = () =>
  import(/* webpackChunkName: "echartsBar " */ "@/views/echarts/bar");
const echartsPie = () =>
  import(/* webpackChunkName: "echartsPie " */ "@/views/echarts/pie");
const echartsOther = () =>
  import(/* webpackChunkName: "echartsOther " */ "@/views/echarts/other");
const echartsMap = () =>
  import(/* webpackChunkName: "echartsMap " */ "@/views/echarts/map");

const routes = [
  {
    component: Layout,
    path: "/home",
    redirect: "/home/dashboard",
    name: "dashboard",
    meta: {
      title: "首页",
      icon: "ri-home-8-line",
      hidden: false,
      isLink: false,
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        meta: {
          title: "首页",
          icon: "ri-home-fill",
          hidden: false,
          isLink: false,
        },
        component: Home,
      },
    ],
  },
  {
    component: Layout,
    path: "/element",
    name: "element",
    redirect: "/element/icons",
    meta: {
      title: "基础组件",
      icon: "ri-stack-line",
      hidden: false,
      isLink: false,
    },
    children: [
      {
        path: "icons",
        name: "icons",
        meta: {
          title: "Icons图标",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementIcons,
      },
      {
        path: "buttons",
        name: "buttons",
        meta: {
          title: "按钮",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementButtons,
      },
      {
        path: "switch",
        name: "switch",
        meta: {
          title: "开关",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementSwitch,
      },
      {
        path: "slider",
        name: "slider",
        meta: {
          title: "滑块",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementSlider,
      },
      {
        path: "rate",
        name: "rate",
        meta: {
          title: "评分",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementRate,
      },
      {
        path: "text",
        name: "text",
        meta: {
          title: "文字",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementText,
      },
      {
        path: "link",
        name: "link",
        meta: {
          title: "链接",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementLink,
      },
      {
        path: "collapse",
        name: "collapse",
        meta: {
          title: "折叠面板",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementCollapse,
      },
      {
        path: "timeline",
        name: "timeline",
        meta: {
          title: "时间线",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementTimeline,
      },
      {
        path: "steps",
        name: "steps",
        meta: {
          title: "步骤条",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementSteps,
      },
      {
        path: "descriptions",
        name: "descriptions",
        meta: {
          title: "描述列表",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementDescriptions,
      },
      {
        path: "tabs",
        name: "tabs",
        meta: {
          title: "标签页",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementTabs,
      },
      {
        path: "tag",
        name: "tag",
        meta: {
          title: "标签",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementTag,
      },
      {
        path: "progress",
        name: "progress",
        meta: {
          title: "进度条",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementProgress,
      },
      {
        path: "alert",
        name: "alert",
        meta: {
          title: "Alert提示",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementAlert,
      },
      {
        path: "drawer",
        name: "drawer",
        meta: {
          title: "抽屉",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementDrawer,
      },
      {
        path: "dropdown",
        name: "dropdown",
        meta: {
          title: "下拉菜单",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementDropdown,
      },
      {
        path: "dialog",
        name: "dialog",
        meta: {
          title: "对话框",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementDialog,
      },
      {
        path: "elementDivider",
        name: "elementDivider",
        meta: {
          title: "分割线",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementDivider,
      },
    ],
  },
  {
    component: Layout,
    path: "/showdata",
    name: "showdata",
    redirect: "/showdata/radio",
    meta: {
      title: "表单与展示",
      icon: "ri-edit-2-line",
      hidden: false,
      isLink: false,
    },
    children: [
      {
        path: "radio",
        name: "radio",
        meta: {
          title: "单选框",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementRadio,
      },
      {
        path: "checkbox",
        name: "checkbox",
        meta: {
          title: "多选框",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementCheckbox,
      },
      {
        path: "select",
        name: "select",
        meta: {
          title: "下拉选择框",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementSelect,
      },
      {
        path: "input",
        name: "input",
        meta: {
          title: "文本输入框",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementInput,
      },
      {
        path: "inputNumber",
        name: "inputNumber",
        meta: {
          title: "数字输入框",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementInputNumber,
      },
      {
        path: "timePicker",
        name: "timePicker",
        meta: {
          title: "时间选择器",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementTimePicker,
      },
      {
        path: "datePicker",
        name: "datePicker",
        meta: {
          title: "日期选择器",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementDatePicker,
      },
      {
        path: "dateTimePicker",
        name: "dateTimePicker",
        meta: {
          title: "日期时间选择器",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementDateTimePicker,
      },
      {
        path: "transfer",
        name: "transfer",
        meta: {
          title: "穿梭框",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementTransfer,
      },
      {
        path: "cascader",
        name: "cascader",
        meta: {
          title: "级联选择器",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementCascader,
      },
      {
        path: "tree",
        name: "tree",
        meta: {
          title: "树形控件",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementTree,
      },
      {
        path: "table",
        name: "table1",
        meta: {
          title: "Table表格",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementTable,
      },
      {
        path: "statistic",
        name: "statistic",
        meta: {
          title: "统计数值",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementStatistic,
      },
      {
        path: "pagination",
        name: "pagination",
        meta: {
          title: "分页",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementPagination,
      },
      {
        path: "tooltip",
        name: "tooltip",
        meta: {
          title: "文字提示",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementTooltip,
      },
      {
        path: "popover",
        name: "popover",
        meta: {
          title: "弹出框",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementPopover,
      },
      {
        path: "popconfirm",
        name: "popconfirm",
        meta: {
          title: "气泡确认框",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementPopconfirm,
      },
      {
        path: "messageBox",
        name: "messageBox",
        meta: {
          title: "消息提示框",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementMessageBox,
      },
      {
        path: "notification",
        name: "notification",
        meta: {
          title: "通知",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: elementNotification,
      },
    ],
  },
  {
    component: Layout,
    path: "/table",
    name: "table",
    redirect: "/table/base",
    meta: {
      title: "列表页面",
      icon: "ri-table-fill",
      hidden: false,
      isLink: false,
    },
    children: [
      {
        path: "base",
        name: "baseTable",
        meta: {
          title: "基础表格",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: baseTable,
      },
      {
        path: "checkbox",
        name: "checkboxTable",
        meta: {
          title: "多选表格",
          icon: "",
          hidden: false,
          isLink: false,
          cache: true,
        },
        component: checkboxTable,
      },
      {
        path: "tree",
        name: "treeTable",
        meta: {
          title: "树状筛选表格",
          icon: "",
          hidden: false,
          isLink: false,
          cache: true,
        },
        component: treeTable,
      },
    ],
  },
  {
    component: Layout,
    path: "/form",
    name: "form",
    redirect: "/form/basic",
    meta: {
      title: "表单页面",
      icon: "ri-pages-line",
      hidden: false,
      isLink: false,
    },
    children: [
      {
        path: "basic",
        name: "basicForm",
        meta: {
          title: "基础表单",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: baseForm,
      },
      {
        path: "multiple",
        name: "multipleForm",
        meta: {
          title: "分步表单",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: multipleForm,
      },
    ],
  },
  {
    component: Layout,
    path: "/page",
    name: "page",
    redirect: "/page/multiple",
    meta: {
      title: "页面结构",
      icon: "ri-pages-fill",
      hidden: false,
      isLink: false,
    },
    children: [
      {
        path: "multiple",
        name: "multiplePage",
        meta: {
          title: "多模块页面",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: multiplePage,
      },
      {
        path: "process",
        name: "processPage",
        meta: {
          title: "多结构页面",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: processPage,
      },
    ],
  },
  {
    component: Layout,
    path: "/echarts",
    name: "echarts",
    redirect: "/echarts/line",
    meta: {
      title: "echarts实例",
      icon: "ri-file-chart-fill",
      hidden: false,
      isLink: false,
    },
    children: [
      {
        path: "line",
        name: "echartsLine",
        meta: {
          title: "折线图",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: echartsLine,
      },
      {
        path: "bar",
        name: "echartsBar",
        meta: {
          title: "柱状图",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: echartsBar,
      },
      {
        path: "pie",
        name: "echartsPie",
        meta: {
          title: "饼图",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: echartsPie,
      },
      {
        path: "map",
        name: "echartsMap",
        meta: {
          title: "地图",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: echartsMap,
      },
      {
        path: "other",
        name: "echartsOther",
        meta: {
          title: "其他图表",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: echartsOther,
      },
    ],
  },
  {
    component: Layout,
    path: "/hooks",
    name: "hooks",
    redirect: "/hooks/page",
    meta: {
      title: "hook实例",
      icon: "ri-flag-fill",
      hidden: false,
      isLink: false,
    },
    children: [
      {
        path: "page",
        name: "pageHook",
        meta: {
          title: "通用表单hook",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: pageHook,
      },
      {
        path: "other",
        name: "otherHook",
        meta: {
          title: "其他hook",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: otherHook,
      },
      {
        path: "demo",
        name: "Demo",
        meta: {
          title: "Demo",
          icon: "",
          hidden: false,
          isLink: false,
        },
        component: demo,
      },
    ],
  },
];

export default routes;
