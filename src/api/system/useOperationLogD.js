import request from "@/utils/request";

export function selectPage(data) {
    return request({
      url: `/framework/web/operationLog/selectPage`,
        method: 'post',
        data
    });
}
