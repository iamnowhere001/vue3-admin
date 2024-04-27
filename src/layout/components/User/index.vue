<template>
  <div class="user-setting">
    <slot></slot>
    <span class="user-name">系统管理员</span>
    <el-dropdown>
      <el-avatar :size="28" :src="userAvatar" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item></el-dropdown-menu
        >
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
const props = defineProps({
  userAvatar: {
    type: String,
    default: require("@/assets/images/user-avatar.png"),
  },
});
</script>

<style lang="scss" scoped>
.user-setting {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  .user-name {
    color: var(--system-white-color);
    font-size: 16px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
.white {
  .user-name {
    color: var(--system-font-color7);
  }
}
</style>
