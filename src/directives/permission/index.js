import store from "@/store";

const permission = {
  mounted(el, binding) {
    const permissions = store.state.user.permissions;
    const value = binding.value;
    if (!permissions.includes(value)) {
      el.parentNode.removeChild(el);
    }
  },
};

export default permission;
