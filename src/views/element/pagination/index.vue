<template>
  <div class="element-pagination system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div class="example-pagination-block">
        <div class="example-demonstration">当你的页数很少的时候</div>
        <el-pagination layout="prev, pager, next" :total="50" />
      </div>
      <div class="example-pagination-block">
        <div class="example-demonstration">当你超过了7页的分页时候</div>
        <el-pagination layout="prev, pager, next" :total="1000" />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">设置最大页码按钮数</span>
      </template>
      <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000"
      />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">带有背景色的分页</span>
      </template>
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">小型分页</span>
      </template>
      <el-pagination small layout="prev, pager, next" :total="50" style="margin-bottom: 10px;"/>
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
      />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">当只有一页时隐藏分页</span>
      </template>
      <div>
        <el-switch v-model="value" style="margin-bottom: 10px;"/>
        <el-pagination
          :hide-on-single-page="value"
          :total="5"
          layout="prev, pager, next"
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">附加功能</span>
      </template>
      <div class="flex items-center mb-4">
        <el-radio-group v-model="small" class="mr-4">
          <el-radio-button :label="false">default</el-radio-button>
          <el-radio-button :label="true">small</el-radio-button>
        </el-radio-group>
        <div>
          背景:
          <el-switch v-model="background" class="ml-2" />
        </div>
        <div class="ml-4">
          禁用: <el-switch v-model="disabled" class="ml-2" />
        </div>
      </div>
      <div class="demo-pagination-block">
        <div class="demonstration">项目总数</div>
        <el-pagination
          v-model:current-page="currentPage1"
          :page-size="100"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, prev, pager, next"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <div class="demo-pagination-block">
        <div class="demonstration">改变页码</div>
        <el-pagination
          v-model:current-page="currentPage2"
          v-model:page-size="pageSize2"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="sizes, prev, pager, next"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <div class="demo-pagination-block">
        <div class="demonstration">跳转到</div>
        <el-pagination
          v-model:current-page="currentPage3"
          v-model:page-size="pageSize3"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="prev, pager, next, jumper"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <div class="demo-pagination-block">
        <div class="demonstration">全部合并</div>
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(false)

const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>

<style lang="scss" scoped>
.element-pagination {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
  .example-pagination-block + .example-pagination-block {
    margin-top: 10px;
  }
  .example-pagination-block .example-demonstration {
    margin-bottom: 16px;
  }
  .demo-pagination-block + .demo-pagination-block {
    margin-top: 10px;
  }
  .demo-pagination-block .demonstration {
    margin-bottom: 16px;
  }
  .my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .items-center {
    align-items: center;
  }
  .flex {
      display: flex;
  }
  .mb-4 {
      margin-bottom: 1rem;
  }
  .ml-2 {
    margin-left: 0.5rem;
  }
  .mr-4 {
    margin-right: 1rem;
  }
  .ml-4 {
    margin-left: 1rem;
  }
}
</style>