import request from "@/utils/request";

export function getUserMenu(data) {
  return request({
    url: "/init/getMenu",
    method: "post",
    data,
  });
}

export function checkLogin(data) {
  return request({
    url: "/init/checkLogin",
    method: "post",
    data,
  });
}
