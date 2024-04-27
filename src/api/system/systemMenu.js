import request from "@/utils/request";

export function selectAllTree() {
    return request({
        method: 'get',
        url: 'framework/web/systemMenu/selectAllTree'
    });
}

export function updateMenu(addModel) {
    return request({
        method: 'post',
    url: 'framework/web/systemMenu/insertOrUpdate',
    data: addModel
    });
}

export function deleteById(data) {
    return request({
        method: 'post',
        url: 'framework/web/systemMenu/deleteById',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        data
    });
}
