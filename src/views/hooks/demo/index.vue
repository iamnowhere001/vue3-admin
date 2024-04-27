
<template>
  <div>
    <p class="mb-20">模态框的使用</p>
    <button @click="showModal = true">显示模态框</button>
    
    <teleport to="body">
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <button @click="showModal = false">关闭</button>
          <!-- 模态框内容 -->
          <div>hello VUE3</div>
        </div>
      </div>
    </teleport>

    <p class="mb-20 mt-20">组件示例</p>
    <act-tag
        :value="2"
        :mapping="[
          { value: 1, label: '未接收' },
          { value: 2, label: '已暂停', type: 'warning' },
          { value: 3, label: '已停止', type: 'danger' },
          { value: 4, label: '已成功', type: 'success' },
          {
            value: 5,
            label: '未知',
            color: '#E5F8F4',
            round: true,
          },
        ]"
      ></act-tag>
  </div>
</template>
<script setup>
import { ref } from "vue"
import ActTag from "@/components/ActTag";
const showModal = ref(false)
</script>
<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  min-width: 200px;
}
</style>