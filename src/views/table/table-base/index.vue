<template>
  <div class="page-base-table">
    <div class="table-container">
      <search-container @search="search" @reset="reset">
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
            <el-button
              type="primary"
              @click="addDetail"
              size="small"
              v-per="'button-add'"
              >新增</el-button
            >
            <el-button
              type="primary"
              @click="openActDialog"
              size="small"
              v-per="'button-add'"
              >打开封装的弹框</el-button
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
            <el-button link type="primary" @click="editDetail(row)"
              >编辑</el-button
            >
            <el-button link type="primary" @click="updateDetail(row)"
              >修改</el-button
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
          <el-button type="primary" @click="confirm"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="detailDialogVisible" title="详情" width="600">
      <act-detail
        :labelWidth="120"
        :detail="activeRow"
        :options="detailOptions"
      >
        <template #status>
          <act-tag
            :value="activeRow.status"
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
        <template #type>
          <span
            v-fmt="{
              value: activeRow.type,
              mapping: [
                { value: 1, label: '普通' },
                { value: 2, label: 'VIP' },
                { value: 3, label: 'SVIP' },
              ],
            }"
          ></span>
        </template>
        <template #rate>
          <el-rate v-model="activeRow.rate" disabled
        /></template>
      </act-detail>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="detailDialogVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { useBaseTable } from "./hooks/useBaseTable";
import ActForm from "@/components/ActForm/index";
import ActTable from "@/components/ActTable/index.vue";
import ActTag from "@/components/ActTag/index";
import ActDetail from "@/components/ActDetail/index";
import { ref } from "vue";
import EditForm from "./editForm.vue";

const searchFormRef = ref(null);
const editFormRef = ref(null);
const {
  searchOptions,
  searchForm,
  tableData,
  columns,
  tableOptions,
  search,
  reset,
  pageChange,
  showDetail,
  editDetail,
  addDetail,
  dialogTitle,
  dialogVisible,
  confirm,
  dialogClose,
  activeRow,
  isAdd,
  detailDialogVisible,
  detailOptions,
  openActDialog,
  updateDetail,
} = useBaseTable(searchFormRef, editFormRef);
</script>
