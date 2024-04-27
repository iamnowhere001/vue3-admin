import request from "@/utils/request";

export function getTable(data) {
  return request({
    url: "/mock/table/list",
    method: "post",
    data,
  });
}

export function addRowData(data) {
  return request({
    url: "/mock/table/addRow",
    method: "post",
    data,
  });
}

export function editRowData(data) {
  return request({
    url: "/mock/table/editRow",
    method: "post",
    data,
  });
}

export function deleteRowData(data) {
  return request({
    url: "/mock/table/deleteRow",
    method: "post",
    data,
  });
}
