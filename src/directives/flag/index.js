import data from "/public/map/country";

const flag = {
  mounted(el, binding) {
    setNationalFlagImg(el, binding);
  },
  updated(el, binding) {
    const children = el.children;
    children[0] && el.removeChild(children[0]);
    setNationalFlagImg(el, binding);
  },
};

function setNationalFlagImg(el, binding) {
  const nationName = el.textContent.trim();
  const url = setNationalFlag(nationName);
  if (url) {
    const img = document.createElement("img");
    img.src = url;
    if (binding.value) {
      img.style = binding.value.style;
    } else {
      img.style = "width:20px;margin-right:5px;vertical-align: middle";
    }
    el.prepend(img);
  }
}

function setNationalFlag(str) {
  const flag = getNationalPng(str);
  if (flag) {
    return require(`/public/map/countryFlag/${flag}.png`);
  }
  return "";
}

function getNationalPng(cname) {
  if (!cname) return "";
  if (typeof data.find((item) => item.cn === cname) === "undefined") return "";
  let brief = data.find((item) => item.cn === cname).brief;
  brief = brief.toLowerCase();
  return brief;
}

export default flag;
