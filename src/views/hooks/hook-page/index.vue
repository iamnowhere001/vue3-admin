<template>
  <div class="page-hook-table">
    <div class="table-container">
      <search-container @search="loadData" @reset="reset">
        <act-form
          ref="searchFormRef"
          :options="searchOptions"
          :labelWidth="80"
          :initForm="searchForm"
          :inline="true"
        >
        </act-form>
      </search-container>
      <div class="table-content">
        <act-table
          :data="tableData"
          :columns="columns"
          :options="tableOptions"
          @pageChange="pageChange"
        >
          <template #header>
            <el-button type="primary" @click="addRow" size="small"
              >新增</el-button
            >
          </template>
          <template #avatar="{ row }">
            <el-image
              style="width: 40px; height: 40px; margin-top: 5px"
              :src="row.avatar"
              :zoom-rate="1.2"
              :preview-src-list="[row.avatar]"
              fit="cover"
            />
          </template>
          <template #rate="{ row }">
            <el-rate v-model="row.rate" disabled
          /></template>
          <template #status="{ row }">
            <act-tag
              :value="row.status"
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
          </template>
          <template #operate="{ row }">
            <el-button link type="primary" @click="showDetail(row)"
              >详情</el-button
            >
            <el-button link type="primary" @click="editRow(row)"
              >编辑</el-button
            >
            <el-button link type="primary" @click="deleteRow(row)"
              >删除</el-button
            >
          </template>
        </act-table>
      </div>
    </div>
    <el-dialog
      v-model="dialogVisible"
      :title="dialogTitle"
      width="600"
      @close="dialogClose"
    >
      <edit-form ref="editFormRef" :data="activeRow" :isAdd="isAdd"></edit-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmRow"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="dialogDetailVisible" title="详情" width="600">
      <detail :data="activeRow"></detail>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogDetailVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { useHookPage } from "./hooks/useHookPage";
import ActForm from "@/components/ActForm/index";
import ActTable from "@/components/ActTable/index.vue";
import ActTag from "@/components/ActTag/index";
import EditForm from "./editForm.vue";
import Detail from "./detail.vue";
import { ref } from "vue";

const searchFormRef = ref(null);
const editFormRef = ref(null);

const {
  reset,
  loadData,
  searchOptions,
  searchForm,
  columns,
  tableData,
  tableOptions,
  pageChange,
  addRow,
  editRow,
  dialogVisible,
  dialogTitle,
  dialogClose,
  isAdd,
  confirmRow,
  activeRow,
  deleteRow,
  dialogDetailVisible,
  showDetail,
} = useHookPage(searchFormRef, editFormRef);
</script>
