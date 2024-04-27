import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";
import NProgress from "@/utils/nprogress";
import { autoLoadRoutes } from "./asyncRoutes";
import { isStaticRouter } from "@/config";
import staticRoutes from "@/router/staticRoutes";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
});

router.beforeResolve(async (to, _from, next) => {
  NProgress.start();
  if (isStaticRouter) {
    //静态路由
    if (store.state.user.menuList.length < 1) {
      store.commit("user/setMenuList", staticRoutes);
      const routes = [
        { path: "/", redirect: "/home", children: store.state.user.menuList },
      ];
      routes.forEach((route) => {
        router.addRoute(route);
      });
      next({ ...to, replace: true });
    } else {
      next();
    }
  } else {
    //验证用户登录获取菜单数据生成动态路由
    await store.dispatch("user/checkLoginInfo");
    if (store.state.user.info?.isLogin) {
      const loadingRoutes = autoLoadRoutes();
      if (store.state.user.menuList.length < 1) {
        await store.dispatch("user/getMenuList", loadingRoutes);
        store.state.user.menuList.forEach((route) => {
          router.addRoute(route);
        });
        next({ ...to, replace: true });
      } else {
        next();
      }
    } else {
      next();
    }
  }
});

router.afterEach((to, _from) => {
  NProgress.done();
});

export default router;
