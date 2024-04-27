import { checkLogin, getUserMenu } from "@/api/system/user";
import { createRoutes } from "@/router/asyncRoutes";
import { title } from "@/config";

const state = () => ({
  token: "", // 登录token
  info: {}, // 用户信息
  menuList: [], //菜单信息
  activeMenu: {}, //当前激活的菜单
  systemTitle: title, //系统名称
  permissions: ["table-name", "form-name", "button-add"], //当前系统配置页面元素权限
});

const getters = {
  token(state) {
    return state.token;
  },
};

const mutations = {
  tokenChange(state, token) {
    state.token = token;
  },
  infoChange(state, info) {
    state.info = info;
  },
  setMenuList(state, arr) {
    //新增一二级路由的关联
    arr.forEach((menu) => {
      if (menu.children.length > 0) {
        menu.children.forEach((item) => {
          item.meta.parent = {
            path: menu.path,
            name: menu.name,
            meta: menu.meta,
          };
        });
      }
    });
    state.menuList = arr;
  },
  setActiveMenu(state, menu) {
    state.activeMenu = menu;
  },
  setSystemTitle(state, title) {
    state.systemTitle = title;
  },
};

const actions = {
  async checkLoginInfo({ commit }) {
    const res = await checkLogin();
    if (res.code === 0) {
      commit("infoChange", res.data);
    }
  },
  async getMenuList({ commit }, loadingRoutes) {
    const res = await getUserMenu();
    if (res.code === 0) {
      const routes = createRoutes(res.data, loadingRoutes);
      commit("setMenuList", routes);
    }
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
