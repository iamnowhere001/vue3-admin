/*
 * @Author:
 * @LastEditors:
 * @Date: 2023-08-23 20:50:45
 * @LastEditTime: 2023-09-02 17:53:22
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
import "element-plus/dist/index.css";
import "normalize.css"; // css初始化
import "remixicon/fonts/remixicon.css";
import "./assets/style/element-reset.scss";
import "./assets/style/vxetable.scss";
import "./assets/style/index.scss"; // 公共css
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import autoExpose from "unplugin-vue-setup-extend-plus/dist/client/index";
import createDirectives from "@/directives";

require("./mockServer");

const app = createApp(App);

app.use(ElementPlus, { size: "mini", locale: zhCn });
app.use(VXETable);
app.use(store);
app.use(router);
app.use(autoExpose);

createDirectives(app);

// element-plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// app.config.performance = true
app.mount("#app");
