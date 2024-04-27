<template>
  <el-breadcrumb separator="/" v-if="activeMenu?.meta">
    <el-breadcrumb-item
      v-if="activeMenu.parent && !route.meta.hidden"
      :to="{ name: activeMenu.parent.name }"
      @click="breadClick(activeMenu.parent.name)"
      >{{ activeMenu.parent.meta.title }}</el-breadcrumb-item
    >
    <el-breadcrumb-item
      v-if="activeMenu.parent && route.meta.hidden"
      :to="{ name: activeMenu.name }"
      >返回上一级</el-breadcrumb-item
    >
    <el-breadcrumb-item>{{ activeMenu.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const activeMenu = computed(() => {
  return store.state.user.activeMenu;
});

const allMenuList = computed(() => {
  return store.state.user.menuList;
});

function breadClick(name) {
  const menu = allMenuList.value.find((item) => item.name === name);
  if (menu) {
    store.commit("user/setActiveMenu", menu.children[0]);
  }
}
</script>

<style lang="scss" scoped></style>
