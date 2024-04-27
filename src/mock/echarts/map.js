export default [
  {
    url: "/mock/world/map",
    method: "post",
    response: () => {
      return {
        code: 200,
        ["data|10"]: [
          {
            "name|+1": [
              "中国",
              "美国",
              "日本",
              "俄罗斯",
              "法国",
              "澳大利亚",
              "新西兰",
              "印度",
              "英国",
              "德国",
              "越南",
              "韩国",
            ],
            value: "@integer(100, 3000)",
          },
        ],
        msg: "请求成功",
      };
    },
  },
  {
    url: "/mock/china/map",
    method: "post",
    response: () => {
      return {
        code: 200,
        ["data|80"]: [
          {
            name: "@province",
            value: "@integer(100, 3000)",
          },
        ],
        msg: "请求成功",
      };
    },
  },
  {
    url: "/mock/province/map",
    method: "post",
    response: () => {
      return {
        code: 200,
        ["data|20"]: [
          {
            "name|1": [
              "武汉市",
              "孝感市",
              "宜昌市",
              "荆门市",
              "襄阳市",
              "天门市",
              "仙桃市",
              "十堰市",
              "恩施州",
              "鄂州市",
              "黄石市",
              "黄冈市",
              "咸宁市",
              "随州市",
              "荆州市",
              "潜江市",
            ],
            value: "@integer(100, 3000)",
          },
        ],
        msg: "请求成功",
      };
    },
  },
];
