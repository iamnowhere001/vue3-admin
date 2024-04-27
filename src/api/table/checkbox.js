import request from "@/utils/request";

export function getCheckboxTable(data) {
  return request({
    url: "/mock/table/checkbox",
    method: "post",
    data,
  });
}
