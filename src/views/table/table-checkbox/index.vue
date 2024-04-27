<template>
  <div class="page-demo-form">
    <ProcessPage :activePageName="activePageName">
      <template #table>
        <div class="table-container">
          <search-container @search="search" @reset="reset">
            <act-form
              ref="searchForm"
              :options="searchOptions"
              :labelWidth="80"
              :initForm="initForm"
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
              @checkboxChange="checkboxChange"
            >
              <template #header>
                <el-button type="primary" @click="edit" size="small"
                  >新增</el-button
                >
              </template>
              <template #footer>
                <el-text type="primary" size="default"
                  >已选择{{ selectRecords.length }}行</el-text
                >
              </template>
              <template #operate="{ row }">
                <el-button link type="primary" @click="toDetail(row)"
                  >详情</el-button
                >
              </template>
              <template #operateType="{ row }">
                <act-tag
                  :value="row.operateType"
                  :mapping="[
                    { value: 1, label: '类型1' },
                    { value: 2, label: '类型2', type: 'warning' },
                    { value: 3, label: '类型3', type: 'danger' },
                    {
                      value: 4,
                      label: '类型4',
                      color: '#E5F8F4',
                      round: true,
                    },
                    { value: 5, label: '类型5', type: 'success' },
                  ]"
                ></act-tag>
              </template>
            </act-table>
          </div>
        </div>
      </template>
      <template #edit>
        <edit-form @goBack="goBack"></edit-form>
      </template>
      <template #detail>
        <detail @goBack="goBack" :data="activeDetail"></detail>
      </template>
    </ProcessPage>
  </div>
</template>

<script setup name="checkboxTable">
import ActForm from "@/components/ActForm/index";
import ProcessPage from "@/components/ProcessPage/index";
import ActTable from "@/components/ActTable/index.vue";
import ActTag from "@/components/ActTag/index";
import { useSystemUser } from "./hooks/useSystemUser";
import { ref } from "vue";
import editForm from "./editForm.vue";
import Detail from "./detail.vue";

const searchFormRef = ref(null);

const {
  searchOptions,
  initForm,
  search,
  reset,
  tableData,
  columns,
  tableOptions,
  pageChange,
  checkboxChange,
  selectRecords,
  activeDetail,
  activePageName,
  edit,
  toDetail,
  goBack,
} = useSystemUser(searchFormRef);
</script>

<style lang="scss" scoped>
.page-demo-form {
  height: 100%;
  .table-container {
    height: 100%;
    .table-content {
      height: calc(100% - 42px);
    }
  }
}
</style>
