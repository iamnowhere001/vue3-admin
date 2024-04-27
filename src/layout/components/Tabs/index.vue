<template>
  <div class="tabs">
    <div class="tags-view-container">
      <scroll-plane :tagRefs="menuRefs">
        <Item
          ref="menuRefs"
          v-for="menu in menuList"
          :key="menu.meta.title"
          :menu="menu"
          :active="activeMenu.path === menu.path"
          @close="delMenu(menu)"
        />
      </scroll-plane>
    </div>
    <div class="handle">
      <el-dropdown placement="bottom">
        <div class="el-dropdown-link">
          <span class="more-action">更多操作</span>
          <el-icon><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              :disabled="currentDisabled"
              @click="closeCurrentRoute"
              ><el-icon><CircleClose /></el-icon>关闭当前页签</el-dropdown-item
            >
            <el-dropdown-item
              :disabled="menuList.length < 3"
              @click="closeOtherRoute"
              ><el-icon><CircleClose /></el-icon>关闭其他页签</el-dropdown-item
            >
            <el-dropdown-item
              :disabled="menuList.length <= 1"
              @click="closeAllRoute"
              ><el-icon><CircleClose /></el-icon>关闭所有页签</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed, watch, reactive, ref, onMounted } from "vue";
import Item from "./item.vue";
import ScrollPlane from "@/components/ScrollPlane";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import tabsHook from "./tabsHook";
const store = useStore();
const route = useRoute();
const router = useRouter();
const scrollbarDom = ref(null);
const defaultMenu = {
  path: "/home/dashboard",
  meta: { title: "首页", hideClose: true },
};
const currentDisabled = computed(() => route.path === defaultMenu.path);

const menuRefs = ref([]);
let activeMenu = reactive({ path: "" });
let menuList = ref(tabsHook.getItem());
if (menuList.value.length === 0) {
  // 判断之前有没有调用过
  addMenu(defaultMenu);
}
watch(menuList.value, (newVal) => {
  tabsHook.setItem(newVal);
});
watch(menuList, (newVal) => {
  tabsHook.setItem(newVal);
});
router.afterEach(() => {
  addMenu(route);
  initMenu(route);
});

// 关闭当前标签，首页不关闭
function closeCurrentRoute() {
  if (route.path !== defaultMenu.path) {
    delMenu(route);
  }
}
// 关闭除了当前标签之外的所有标签
function closeOtherRoute() {
  menuList.value = [defaultMenu];
  if (route.path !== defaultMenu.path) {
    addMenu(route);
  }
  setKeepAliveData();
}

// 关闭所有的标签，除了首页
function closeAllRoute() {
  menuList.value = [defaultMenu];
  setKeepAliveData();
  router.push(defaultMenu.path);
}

// 添加新的菜单项
function addMenu(menu) {
  let { path, meta, name } = menu;
  if (meta.hideTabs) {
    return;
  }
  let hasMenu = menuList.value.some((obj) => {
    return obj.path === path;
  });
  if (!hasMenu) {
    menuList.value.push({
      path,
      meta,
      name,
    });
  }
}

// 删除菜单项
function delMenu(menu) {
  let index = 0;
  if (!menu.meta.hideClose) {
    if (menu.meta.cache && menu.name) {
      store.commit("keepAlive/delKeepAliveComponentsName", menu.name);
    }
    index = menuList.value.findIndex((item) => item.path === menu.path);
    menuList.value.splice(index, 1);
  }
  if (menu.path === activeMenu.path) {
    index - 1 > 0
      ? router.push(menuList.value[index - 1].path)
      : router.push(defaultMenu.path);
  }
}

// 初始化activeMenu
function initMenu(menu) {
  activeMenu = menu;
}

// 配置需要缓存的数据
function setKeepAliveData() {
  let keepAliveNames = [];
  menuList.value.forEach((menu) => {
    menu.meta && menu.meta.cache && menu.name && keepAliveNames.push(menu.name);
  });
  store.commit("keepAlive/setKeepAliveComponentsName", keepAliveNames);
}

onMounted(() => {
  // 初始化时调用：1. 新增菜单 2. 初始化activeMenu
  addMenu(route);
  initMenu(route);
});
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-right: 20px;
  .handle {
    min-width: 95px;
    height: 100%;
    display: flex;
    align-items: center;
    .el-dropdown-link {
      margin-top: 5px;
      border-left: 1px solid var(--system-primary-color);
      height: 25px;
      width: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: var(--system-primary-color);
      margin-left: 10px;
    }
  }
}

.tags-view-container {
  height: 34px;
  width: calc(100% - 95px);
  display: flex;
  align-items: center;
}
</style>
