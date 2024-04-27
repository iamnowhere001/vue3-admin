
import axios from "axios";
import store from "@/store";
import { ElMessage } from "element-plus";
import qs from "qs";
import { baseURL, timeout } from "@/config";

const service = axios.create({
  baseURL,
  timeout,
  headers: {
    Accept: "application/json",
    // 'Content-Type': type // 前端人员链接yapi服务mock数据时将其改为'Content-Type': type  、
    "Content-Type": "application/json; charset=utf-8",
    Authorization: decodeURIComponent(location.search).substr(1),
  },
});

// 请求前的统一处理
service.interceptors.request.use(
  (config) => {
    if (store.getters["user/token"]) {
      config.headers["token"] = store.state.user.token;
    }
    if (
      config.data &&
      config.flag &&
      config.headers["Content-Type"] ===
        "application/x-www-form-urlencoded;charset=UTF-8"
    )
      config.data = qs.stringify(config.data);
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

export default service;
