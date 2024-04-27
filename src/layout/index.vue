<template>
  <div class="layout" :class="{ 'bg-show': bgImgVisible }">
    <div class="layout-header flex">
      <Title></Title>
      <div class="menu-container">
        <Menu mode="horizontal" v-if="topMenuVisible"></Menu>
      </div>
      <div class="user-container">
        <User> </User>
      </div>
    </div>
    <div
      class="layout-content"
      :class="{ collapse: !isCollapse, 'left-menu-hidden': !leftMenuVisible }"
    >
      <div class="layout-side" :class="{ 'bg-show': bgImgVisible }">
        <Menu v-if="leftMenuVisible" ref="menuRefs"></Menu>
      </div>
      <div class="page-container" :class="{ 'bg-show': bgImgVisible }">
        <div class="page-tools-container">
          <span
            class="collapse-button"
            v-if="leftMenuVisible && !menuSeparate"
            @click="toggleCollapse"
          >
            <i
              :class="
                !isCollapse ? 'ri-indent-decrease' : ' ri-indent-increase'
              "
            ></i>
          </span>
          <div class="tools-box">
            <Breadcrumb v-if="!tagsVisible"></Breadcrumb>
            <Tabs v-else></Tabs>
          </div>
        </div>
        <ThemeSetting></ThemeSetting>
        <div class="page-content-container">
          <router-view v-slot="{ Component, route }">
            <transition
              :name="route.meta.transition || 'fade-transform'"
              mode="out-in"
            >
              <keep-alive :include="keepAliveComponentsName">
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Menu from "./components/Menu";
import Title from "./components/Title";
import Breadcrumb from "./components/Breadcrumb";
import User from "./components/User";
import ThemeSetting from "./components/ThemeSetting";
import Tabs from "./components/Tabs";
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();

const isCollapse = computed(() => {
  return store.state.app.isCollapse;
});

const topMenuVisible = computed(() => {
  return store.state.app.topMenuVisible;
});

const leftMenuVisible = computed(() => {
  return store.state.app.leftMenuVisible;
});

const tagsVisible = computed(() => {
  return store.state.app.tagsVisible;
});

const bgImgVisible = computed(() => {
  return store.state.app.bgImgVisible;
});

const menuSeparate = computed(() => {
  return store.state.app.menuSeparate;
});

const keepAliveComponentsName = computed(
  () => store.getters["keepAlive/keepAliveComponentsName"]
);

function toggleCollapse() {
  store.commit("app/stateChange", {
    value: !isCollapse.value,
    name: "isCollapse",
  });
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--system-content-background-color);
  &-header {
    height: 67px;
    background-color: var(--system-black-color1);
    padding-right: 20px;
    box-shadow: 0px 4px 8px 0px var(--system-shadow-color);
    .menu-container {
      width: 60%;
    }
    .user-container {
      flex: 1;
    }
  }
  &-content {
    height: calc(100% - 67px);
    display: flex;
    &.collapse {
      .layout-side {
        width: 16%;
      }
      .page-container {
        width: 84%;
      }
    }
    &.left-menu-hidden {
      .layout-side {
        display: none;
      }
      .page-container {
        width: 100%;
        .page-tools-container {
          padding-left: 30px;
        }
      }
    }
  }
  &-side {
    height: 100%;
    width: 88px;
    padding: 0 14px;
    background-color: var(--system-black-color2);
    transition: width 0.8s;
    box-shadow: 0px 4px 8px 0px var(--system-shadow-color);
  }
  .page-container {
    width: calc(100% - 88px);
    height: 100%;
    transition: width 0.8s;
  }
  .page-tools-container {
    height: 52px;
    position: relative;
    padding-left: 40px;
    .collapse-button {
      position: absolute;
      font-size: 24px;
      cursor: pointer;
      top: 13px;
      left: 18px;
      color: var(--system-primary-color);
    }
    .tools-box {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .page-content-container {
    padding: 0px;
    border-radius: 4px;
    margin: 25px 15px;
    margin-top: 0;
    height: calc(100% - 66px);
    background-color: transparent;
    position: relative;
    & > .page,
    & > [class|="page"] {
      background-color: var(--system-page-background-color);
      padding: 15px;
      border-radius: 3px;
      box-shadow: 0px 2px 5px 0px var(--system-shadow-color);
      height: 100%;
    }
  }
}
.blue {
  .layout {
    &.bg-show {
      background: url(@/assets/images/page-blue-bg.png) no-repeat center / 100%
        100%;
    }
  }
}
</style>

<style lang="scss">
.white {
  .layout {
    &-side {
      &.bg-show {
        background: url(@/assets/images/white-side-bg.png) no-repeat center /
          100% 100%;
      }
    }
    .page-container {
      &.bg-show {
        background: url(@/assets/images/white-content-bg.png) no-repeat center /
          100% 100%;
      }
    }
  }
}
</style>
