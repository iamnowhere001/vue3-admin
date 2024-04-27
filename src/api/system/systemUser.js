import request from "@/utils/request";
import md5 from 'js-md5'

export function selectPage(data) {
    return request({
      url: "/sys/user/selectPage",
      method: "post",
      data,
    });
  }

export function deleteById(data) {
    return request({
      url: "/framework/web/systemUser/deleteById",
      method: "post",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data,
    });
  }

export function userOnoff(data) {
    return request({
      url: "/sys/user/userOnoff",
      method: "post",
      data,
    });
  }

export function selectAll(data) {
    return request({
      url: "/sys/role/selectAll",
      method: "post",
      data,
    });
  }

export function selectRoles(data) {
    return request({
      url: "/sys/user/selectRoles",
      method: "post",
      data,
    });
  }

export function allProvince() {
  return request({
    method: 'GET',
    url: '/framework/web/areaInfo/allProvince'
  });
}

export function selectChild(data) {
  return request({
    method: 'POST',
    url: '/framework/web/areaInfo/selectChild?code=' + data
  });
}

export function verify(data) {
    return request({
      url: "/sys/user/verify",
      method: "post",
      data: {password: md5(data)}
    });
  }

export function checkTel(data) {
    return request({
      url: `/sys/user/checkTel`,
        method: 'post',
        data
    });
}

export function insert(data) {
    return request({
      url: `/sys/user/insert`,
        method: 'post',
        data
    });
}

export function update(data) {
    return request({
      url: `/sys/user/update`,
        method: 'post',
        data
    });
}

export function selectById(id) {
    return request({
      method: 'get',
      url: '/sys/user/selectById',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {id: id}
    });
}