
<template>
  <div class="input-page system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-input v-model="form.input1"
                placeholder="请输入内容" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">禁用状态</span>
      </template>
      <el-input v-model="form.input2"
                disabled
                placeholder="请输入内容" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">一键清空</span>
      </template>
      <el-input v-model="form.input3"
                clearable
                placeholder="请输入内容" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">格式化</span>
      </template>
      <el-input v-model="form.input4"
                :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                placeholder="请输入内容" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">密码框</span>
      </template>
      <el-input v-model="form.input5"
                type="password"
                show-password
                placeholder="请输入密码" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">带图标的输入框</span>
      </template>
      <el-row :gutter="20">
        <el-col :span="12">

          <el-input v-model="form.input6"
                    :suffix-icon="Calendar"
                    placeholder="请输入内容" />
        </el-col>
        <el-col :span="12">
          <el-input v-model="form.input7"
                    :prefix-icon="Search"
                    placeholder="请输入内容" />

        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">文本域</span>
      </template>
      <el-input v-model="form.textarea1"
                :rows="2"
                type="textarea"
                placeholder="请输入内容" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自适应文本域</span>
      </template>
      <el-input v-model="form.textarea2"
                :autosize="{ minRows: 2, maxRows: 4 }"
                type="textarea"
                placeholder="请输入内容" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">复合型输入框</span>
      </template>
      <div>
        <el-input v-model="form.input8"
                  placeholder="请输入内容">
          <template #prepend>Http://</template>
        </el-input>
      </div>
      <div class="mt-4">
        <el-input v-model="form.input9"
                  placeholder="请输入内容">
          <template #append>.com</template>
        </el-input>
      </div>
      <div class="mt-4">
        <el-input v-model="form.input10"
                  placeholder="请输入内容"
                  class="input-with-select">
          <template #prepend>
            <el-select v-model="form.select1"
                       placeholder="请选择"
                       style="width: 115px">
              <el-option label="类型1"
                         value="1" />
              <el-option label="类型2"
                         value="2" />
              <el-option label="类型3"
                         value="3" />
            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </div>
      <div class="mt-4">
        <el-input v-model="form.input9"
                  placeholder="请输入内容"
                  class="input-with-select">
          <template #prepend>
            <el-button :icon="Search" />
          </template>
          <template #append>
            <el-select v-model="form.select2"
                       placeholder="请选择"
                       style="width: 115px">
              <el-option label="类型1"
                         value="1" />
              <el-option label="类型2"
                         value="2" />
              <el-option label="类型3"
                         value="3" />
            </el-select>
          </template>
        </el-input>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">输入长度限制</span>
      </template>
      <el-input v-model="form.text"
                maxlength="10"
                placeholder="请输入内容"
                show-word-limit
                type="text" />
      <div style="margin: 20px 0" />
      <el-input v-model="form.textarea3"
                maxlength="30"
                placeholder="请输入内容"
                show-word-limit
                type="textarea" />
    </el-card>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const form = reactive({
  input1: '',
  input2: '',
  input3: '',
  input4: '',
  input5: '',
  input6: '',
  input7: '',
  input8: '',
  input9: '',
  input10: '',
  textarea1: '',
  textarea2: '',
  textarea3: '',
  select1: '',
  select2: '',
  text: ''
})
</script>
<style lang="scss">
.input-page {
  height: 100%;
  overflow-y: auto;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>