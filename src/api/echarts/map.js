import request from "@/utils/request";

export function getWorldMap(data) {
  return request({
    url: "/mock/world/map",
    method: "post",
    data,
  });
}

export function getChinaMap(data) {
  return request({
    url: "/mock/china/map",
    method: "post",
    data,
  });
}

export function getProvinceMap(data) {
  return request({
    url: "/mock/province/map",
    method: "post",
    data,
  });
}
