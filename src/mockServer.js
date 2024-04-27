/**
 * Mock配置文件
 **/
// 首先引入Mock
const Mock = require("mockjs");

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: "200-600",
});

let configArray = [];

// 使用webpack的require.context()遍历所有Mock文件
const files = require.context("@/mock", true, /\.js$/);
files.keys().forEach((key) => {
  if (key === "./index.js") return;
  configArray = configArray.concat(files(key).default);
});

// 注册所有的Mock服务
configArray.forEach((item) => {
  Mock.mock(item.url, item.method, ({ body }) => {
    const data = JSON.parse(body);
    return Mock.mock(item.response(data));
  });
});
