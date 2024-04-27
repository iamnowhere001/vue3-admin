export default [
  {
    url: "/mock/table/list",
    method: "post",
    response: ({ page = 1, pageSize = 15 }) => {
      return {
        code: 200,
        data: {
          [`list|${pageSize}`]: [
            {
              "id|+1": 0,
              name: "@cname",
              avatar: "@image('200x200', '@color', '#FFF', 'avatar')",
              description: "@cparagraph(1, 3)",
              "type|1": [1, 2, 3],
              "status|1": [1, 2, 3, 4, 5],
              "rate|1": [1, 2, 3, 4, 5],
              date: "@datetime",
            },
          ],
          page: {
            page: page,
            pageSize: pageSize,
            total: 198,
          },
        },
        msg: "请求成功",
      };
    },
  },
  {
    url: "/mock/table/checkbox",
    method: "post",
    response: ({ page = 1, pageSize = 15 }) => {
      return {
        code: 200,
        data: {
          [`list|${pageSize}`]: [
            {
              id: "@id",
              account: "@cname",
              ip: "@ip",
              "modelType|1": [1, 2, 3],
              "operateType|1": [1, 2, 3, 4, 5],
              menu: "@ctitle(3, 5)",
              log: "@paragraph(1, 3)",
              api: "@url",
              times: "@integer(60, 100)",
              date: "@datetime",
            },
          ],
          page: {
            page: page,
            pageSize: pageSize,
            total: 198,
          },
        },
        msg: "请求成功",
      };
    },
  },
  {
    url: "/mock/table/addRow",
    method: "post",
    response: () => {
      return {
        code: 200,
        msg: "新增成功",
      };
    },
  },
  {
    url: "/mock/table/editRow",
    method: "post",
    response: () => {
      return {
        code: 200,
        msg: "修改成功",
      };
    },
  },
  {
    url: "/mock/table/deleteRow",
    method: "post",
    response: () => {
      return {
        code: 200,
        msg: "删除成功",
      };
    },
  },
];
