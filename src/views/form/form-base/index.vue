
<template>
  <div class='form-base'>
    <el-card class="mb-10">
      <template #header>基础表单</template>
      <div class="radio-box">
        <el-radio-group v-model="labelPosition">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶对齐</el-radio-button>
        </el-radio-group>
      </div>
      <div class="container">
        <act-form ref="addForm"
                  :options="options"
                  :labelWidth="130"
                  :labelPosition="labelPosition"
                  :initForm="form"
                  :buttonConfig="{
                  show: true
                }">
        </act-form>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import ActForm from '@/components/ActForm'
import { useFormBase } from './hooks/useFormBase'
const { labelPosition, form, options } = useFormBase()
</script>

<style lang="scss" scope>
.form-base {
  height: 100%;
  overflow: auto;
  .radio-box {
    text-align: center;
    margin-bottom: 20px;
  }
  .container {
    width: 40%;
    margin: 0 auto;
  }
}
</style>
