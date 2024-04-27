
<template>
  <div class='table-tree page'>
    <el-row>
      <el-col :span="4">
        <el-input v-model="filterText"
                  placeholder="输入关键字">
          <template #append>
            <el-button :icon="Search"
                       @click="searchTree" />
          </template>
        </el-input>
        <el-tree ref="treeRef"
                 class="filter-tree"
                 :data="data"
                 :props="defaultProps"
                 default-expand-all
                 :filter-node-method="filterNode" />
      </el-col>
      <el-col :span="20">
        <search-container @search="search"
                          @reset="reset">
          <act-form ref="searchForm"
                    :options="options"
                    :labelWidth="130"
                    :initForm="form"
                    :inline="true">
          </act-form>
        </search-container>
        <div class="table-content">
          <act-table :data="tableData"
                     :columns="columns"
                     :options="tableOptions"
                     @pageChange="pageChange">
            <template #header>
              <div>
                <el-button type="primary"
                           size="small"
                           @click="handleAdd"
                           :icon="Plus">新增</el-button>
              </div>
            </template>
            <template #code="{ row }">
              <el-tooltip effect="dark"
                          content="详情"
                          placement="top">
                <el-link :icon="View"
                         type="primary"
                         class="mr-8"
                         @click="handleView(row.id)"></el-link>
              </el-tooltip>
            </template>
            <template #operate="{ row }">
              <el-tooltip effect="dark"
                          content="修改"
                          placement="top">
                <el-link :icon="Edit"
                         type="primary"
                         class="mr-8"
                         @click="handleEdit(row.id)"></el-link>
              </el-tooltip>
              <el-tooltip effect="dark"
                          content="删除"
                          placement="top">
                <el-link :icon="Delete"
                         type="danger"
                         @click="handleDelete(row.id)"></el-link>
              </el-tooltip>
            </template>
          </act-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {
  Search,
  Edit,
  View,
  DocumentCopy,
  Delete,
  Plus,
  Download
} from '@element-plus/icons-vue'
import ActForm from '@/components/ActForm/index'
import SearchContainer from '@/components/SearchContainer'
import { useTableTree } from './hooks/useTableTree'
const {
  filterText,
  data,
  defaultProps,
  searchTree,
  filterNode,
  form,
  options,
  search,
  reset,
  handleAdd,
  handleEdit,
  handleDelete,
  handleView,
  tableData,
  columns,
  tableOptions,
  pageChange
} = useTableTree()
</script>

<style lang="scss" scope>
.table-tree {
  height: 100%;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
    }
  }
  .table-content {
    height: calc(100% - 42px);
  }
}
</style>
