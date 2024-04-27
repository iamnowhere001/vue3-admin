<template>
  <el-scrollbar v-if="!menuSeparate" wrap-class="system-scrollbar">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeMenu"
      active-text-color="#fff"
      :mode="mode"
      :collapse="mode === 'vertical' && isCollapse"
    >
      <menu-item
        v-for="item in allMenuList"
        :key="item.name"
        :menu="item"
      ></menu-item>
    </el-menu>
  </el-scrollbar>
  <el-scrollbar v-else wrap-class="system-scrollbar">
    <el-menu
      v-if="mode === 'horizontal'"
      class="el-menu-vertical-demo"
      :default-active="activeFirstMenu"
      active-text-color="#fff"
      mode="horizontal"
    >
      <menu-item
        v-for="item in firstMenuList"
        :key="item.name"
        :menu="item"
      ></menu-item>
    </el-menu>
    <el-menu
      v-else
      class="el-menu-vertical-demo"
      :default-active="activeMenu"
      active-text-color="#fff"
      mode="vertical"
      :collapse="isCollapse"
      style="margin-top: 10px"
    >
      <menu-item
        v-for="item in secondMenuList"
        :key="item.name"
        :menu="item"
      ></menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
import MenuItem from "./menuItem.vue";
import { useRoute } from "vue-router";

const props = defineProps({
  mode: {
    type: String,
    default: "vertical",
  },
});

const store = useStore();
const route = useRoute();

const menuSeparate = computed(() => {
  return store.state.app.menuSeparate;
});
const activeMenu = computed(() => {
  const { name } = route;
  return name;
});
const activeFirstMenu = computed(() => {
  const { meta } = route;
  return meta.parent.name;
});
const allMenuList = computed(() => {
  return store.state.user.menuList;
});
const isCollapse = computed(() => {
  return store.state.app.isCollapse;
});
const firstMenuList = computed(() => {
  const allMenuList = store.state.user.menuList;
  return allMenuList.map((item) => ({
    ...item,
    children: item.children.slice(0, 1),
  }));
});

const secondMenuList = computed(() => {
  const allMenuList = store.state.user.menuList;
  const menu = allMenuList.find((item) => item.name === activeFirstMenu.value);
  if (menu) {
    return menu.children;
  }
  return [];
});

onMounted(() => {});
</script>

<style lang="scss" scoped></style>
