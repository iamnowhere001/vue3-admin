<template>
  <div class="theme-setting">
    <div class="setting-button" @click="showThemeVisible">
      <el-icon><Setting /></el-icon>
    </div>
    <el-drawer v-model="themSettingVisible" title="主题设置" :size="360">
      <act-form
        ref="formRef"
        :options="options"
        :labelWidth="140"
        :initForm="form"
      ></act-form>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, toRefs, reactive, watch } from "vue";
import ActForm from "@/components/ActForm/index";
import { useStore } from "vuex";
import {
  bgImgVisible,
  systemStyle,
  isCollapse,
  topMenuVisible,
  leftMenuVisible,
  tagsVisible,
  menuSeparate,
} from "@/config";

const themSettingVisible = ref(false);
const store = useStore();
const state = reactive({
  form: {
    bgImgVisible,
    systemStyle,
    isCollapse,
    topMenuVisible,
    leftMenuVisible,
    tagsVisible,
    menuSeparate,
  },
  options: [
    {
      label: "整体风格",
      type: "select",
      prop: "systemStyle",
      clearable: false,
      options: [
        {
          label: "黑白",
          value: "black",
        },
        {
          label: "纯黑",
          value: "dark",
        },
        {
          label: "科技蓝",
          value: "blue",
        },
        {
          label: "纯白",
          value: "white",
        },
      ],
      onChange(value) {
        appChange(value, "systemStyle");
      },
    },
    {
      label: "背景图片是否显示",
      type: "switch",
      prop: "bgImgVisible",
      onChange(value) {
        appChange(value, "bgImgVisible");
      },
    },
    {
      label: "侧边栏是否收缩",
      type: "switch",
      prop: "isCollapse",
      hidden: false,
      onChange(value) {
        appChange(value, "isCollapse");
      },
    },
    {
      label: "顶部菜单是否显示",
      type: "switch",
      prop: "topMenuVisible",
      onChange(value) {
        appChange(value, "topMenuVisible");
      },
    },
    {
      label: "左侧菜单是否显示",
      type: "switch",
      prop: "leftMenuVisible",
      onChange(value) {
        appChange(value, "leftMenuVisible");
      },
    },
    {
      label: "标签页是否显示",
      type: "switch",
      prop: "tagsVisible",
      onChange(value) {
        appChange(value, "tagsVisible");
      },
    },
    {
      label: "一二级菜单是否分离",
      type: "switch",
      prop: "menuSeparate",
      onChange(value) {
        appChange(value, "menuSeparate");
      },
    },
  ],
});

function showThemeVisible() {
  themSettingVisible.value = true;
}

function appChange(value, name) {
  store.commit("app/stateChange", { name, value });
}

watch(
  () => state.form.menuSeparate,
  (value) => {
    state.options[2].hidden = value;
  },
  {
    immediate: true,
  }
);

const { form, options } = toRefs(state);
</script>

<style lang="scss" scoped>
.theme-setting {
  .setting-button {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: var(--system-page-background-color);
    box-shadow: 0px 4px 9px 0px var(--system-shadow-color);
    border: 1px solid var(--system-border-color3);
    font-size: 20px;
    cursor: pointer;
    color: var(--system-font-color1);
    &:hover {
      background-color: var(--system-primary-color);
      color: var(--system-white-color);
    }
  }
}
</style>
