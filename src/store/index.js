import { createStore, createLogger } from "vuex";
import createPersistedState from "vuex-persistedstate";
const isDev = process.env.NODE_ENV === "development";

const files = require.context("./modules", false, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});
Object.keys(modules).forEach((key) => {
  modules[key]["namespaced"] = true;
});

const persistedState = createPersistedState({
  storage: sessionStorage,
  key: "vuex",
  paths: ["user.activeMenu"],
});

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules,
  strict: isDev,
  plugins: isDev ? [createLogger(), persistedState] : [persistedState],
});
