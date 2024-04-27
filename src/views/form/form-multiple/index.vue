<template>
  <div class="page-process">
    <ProcessPage
      @confirm="handleConfirm"
      @nextConfirm="handleNextConfirm"
      :buttonVisible="true"
      :nextDisabled="nextDisabled"
    >
      <template #part1>
        <p class="title line-decorate">基础信息</p>
        <div class="form-container">
          <act-form
            ref="formRef1"
            :options="options1"
            :labelWidth="180"
            :initForm="form"
          ></act-form>
        </div>
      </template>
      <template #part2>
        <p class="title line-decorate">法定代表人信息</p>
        <div class="form-container">
          <act-form
            ref="formRef2"
            :options="options2"
            :labelWidth="180"
            :initForm="form"
          ></act-form>
        </div>
      </template>
      <template #part3>
        <p class="title line-decorate">联系人信息</p>
        <div class="form-container">
          <act-form
            ref="formRef3"
            :options="options3"
            :labelWidth="180"
            :initForm="form"
          ></act-form>
        </div>
      </template>
    </ProcessPage>
  </div>
</template>

<script setup>
import ProcessPage from "@/components/ProcessPage/index";
import { useFormMultiple } from "./hooks/useFormMultiple";
import ActForm from "@/components/ActForm/index";
import { ref } from "vue";

const formRef1 = ref(null);
const formRef2 = ref(null);
const formRef3 = ref(null);
const {
  form,
  nextDisabled,
  options1,
  options2,
  options3,
  handleConfirm,
  handleNextConfirm,
} = useFormMultiple(formRef1, formRef2, formRef3);
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  margin-bottom: 28px;
}
.form-container {
  width: 50%;
  margin: 0 auto;
}
</style>
