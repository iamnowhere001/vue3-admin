const tabsHook = {
  setItem: function (arr) {
    sessionStorage.setItem("tabs", JSON.stringify(arr));
  },
  getItem: function () {
    return JSON.parse(sessionStorage.getItem("tabs") || "[]");
  },
};
export default tabsHook;
