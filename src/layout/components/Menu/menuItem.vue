<template>
  <el-sub-menu
    :index="showMenu.name"
    v-if="showMenuType === 2 && !menu.meta.hidden"
    popper-class="system-scrollbar"
  >
    <template #title>
      <i :class="menu.meta.icon" v-if="menu.meta.icon" class="menu-icon"></i>
      <span>{{ menu.meta.title }}</span>
    </template>
    <menu-item
      v-for="item in showMenu.children"
      :key="item.name"
      :menu="item"
    ></menu-item>
  </el-sub-menu>
  <el-menu-item
    :index="showMenu.name"
    v-if="showMenuType === 1 && !menu.meta.hidden"
    @click="menuClick(showMenu)"
  >
    <i :class="menu.meta.icon" v-if="menu.meta.icon" class="menu-icon"></i>
    <span>{{ menu.meta.title }}</span>
  </el-menu-item>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const store = useStore();

const menu = props.menu;

const showMenuType = computed(() => {
  // 1: 有0或1个子菜单， 2：有多个个子菜单， 3：外链接
  if (!menu.children || menu.children.length === 1) {
    return 1;
  }
  return 2;
});

const showMenu = computed(() => {
  return menu;
});

function menuClick(menu) {
  // console.log(menu);
  store.commit("user/setActiveMenu", menu);
  if (menu.meta.cache && menu.name) {
    store.commit("keepAlive/addKeepAliveComponentsName", menu.name);
  }
  router.push({ name: menu.name });
}
</script>

<style lang="scss" scoped>
.menu-icon {
  margin-right: 5px;
}
</style>
