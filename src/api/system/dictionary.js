import request from "@/utils/request";

export function getDictList(url) {
  return request({
    url,
    method: "post",
  });
}
