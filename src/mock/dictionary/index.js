export default [
  {
    //地区字典
    url: "/mock/dictionary/area",
    method: "post",
    response: () => {
      return {
        code: 200,
        data: [
          {
            name: "湖北省",
            code: "hb",
            children: [
              {
                name: "武汉市",
                code: "wh",
                children: [{ name: "江汉区", code: "jh" }],
              },
              { name: "孝感市", code: "xg" },
            ],
          },
          {
            name: "湖南省",
            code: "hn",
            children: [
              { name: "长沙市", code: "cs" },
              { name: "岳阳市", code: "yy" },
            ],
          },
        ],
        msg: "请求成功",
      };
    },
  },
  {
    //操作类型查询
    url: "/mock/dictionary/operateType",
    method: "post",
    response: () => {
      return {
        code: 200,
        data: [
          { label: "查询", value: 0 },
          { label: "新增", value: 1 },
          { label: "修改", value: 2 },
          { label: "删除", value: 3 },
        ],
        msg: "请求成功",
      };
    },
  },
];
