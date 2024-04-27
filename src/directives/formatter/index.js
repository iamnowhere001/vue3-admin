const formatter = {
  mounted(el, binding) {
    const { value, mapping } = binding.value;
    const obj = mapping.find((item) => item.value === value);
    el.textContent = obj ? obj.label : value;
  },
  updated(el, binding) {
    const { value, mapping } = binding.value;
    const obj = mapping.find((item) => item.value === value);
    el.textContent = obj ? obj.label : value;
  },
};

export default formatter;
