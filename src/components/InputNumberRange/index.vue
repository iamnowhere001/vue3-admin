<template>
  <div class="input-number-range" :class="{ 'is-disabled': disabled }">
    <div class="flex">
      <div class="from">
        <el-input
          ref="input_from"
          v-model="userInputForm"
          :disabled="disabled"
          placeholder="最小值"
          @blur="handleBlurFrom"
          @focus="handleFocusFrom"
          @input="handleInputFrom"
          @change="handleInputChangeFrom"
        ></el-input>
      </div>
      <div class="center">
        <span>至</span>
      </div>
      <div class="to">
        <el-input
          ref="input_to"
          v-model="userInputTo"
          :disabled="disabled"
          placeholder="最大值"
          @blur="handleBlurTo"
          @focus="handleFocusTo"
          @input="handleInputTo"
          @change="handleInputChangeTo"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputNumberRange",
  props: {
    // 初始化范围
    modelValue: { required: true },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 精度参数
    precision: {
      type: Number,
      default: 0,
      validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      },
    },
  },
  data() {
    return {
      userInputForm: null,
      userInputTo: null,
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(value) {
        /** 初始化范围 */
        if (value instanceof Array && this.precision !== undefined) {
          this.userInputForm = typeof value[0] === "number" ? value[0] : null;
          this.userInputTo = typeof value[1] === "number" ? value[1] : null;
        }
        if (!value || (value instanceof Array && value.length === 0)) {
          this.userInputForm = null;
          this.userInputTo = null;
        }
      },
    },
  },
  methods: {
    // 根据精度保留数字
    toPrecision(num, precision) {
      if (precision === undefined) precision = 0;
      return parseFloat(
        Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)
      );
    },
    handleBlurFrom(event) {
      this.$emit("blurfrom", event);
    },
    handleFocusFrom(event) {
      this.$emit("focusfrom", event);
    },
    handleBlurTo(event) {
      this.$emit("blurto", event);
    },
    handleFocusTo(event) {
      this.$emit("focusto", event);
    },
    handleInputFrom(value) {
      this.$emit("inputfrom", value);
    },
    handleInputTo(value) {
      this.$emit("inputto", value);
    },
    // from输入框change事件
    handleInputChangeFrom(value) {
      // 如果是非数字空返回null
      if (isNaN(value)) {
        this.$emit("update:modelValue", [null, this.userInputTo]);
        this.$emit("changefrom", this.userInputForm);
        return;
      }
      // 初始化数字精度
      this.userInputForm = this.setPrecisionValue(value);
      // 如果from > to 将from值替换成to
      if (typeof this.userInputTo === "number") {
        this.userInputForm =
          parseFloat(this.userInputForm) <= parseFloat(this.userInputTo)
            ? this.userInputForm
            : this.userInputTo;
      }
      this.$emit("update:modelValue", [this.userInputForm, this.userInputTo]);
      this.$emit("changefrom", this.userInputForm);
    },
    // to输入框change事件
    handleInputChangeTo(value) {
      // 如果是非数字空返回null
      if (isNaN(value)) {
        this.$emit("update:modelValue", [this.userInputForm, null]);
        this.$emit("changefrom", this.userInputTo);
        return;
      }
      // 初始化数字精度
      this.userInputTo = this.setPrecisionValue(value);
      // 如果to < tfrom 将to值替换成from
      if (typeof this.userInputForm === "number") {
        this.userInputTo =
          parseFloat(this.userInputTo) >= parseFloat(this.userInputForm)
            ? this.userInputTo
            : this.userInputForm;
      }
      this.$emit("update:modelValue", [this.userInputForm, this.userInputTo]);
      this.$emit("changeto", this.userInputTo);
    },
    // 设置成精度数字
    setPrecisionValue(value) {
      if (this.precision !== undefined) {
        const val = this.toPrecision(value, this.precision);
        return val;
      }
      return null;
    },
  },
};
</script>
<style lang="scss" scoped>
:deep(.el-input--mini .el-input__inner) {
  border: 0px;
  margin: 0;
  padding: 0 15px;
  background-color: transparent;
}
:deep(.el-input__wrapper) {
  box-shadow: none !important;
  border: none !important;
  background-color: transparent !important;
}
:deep(.el-input__inner) {
  text-align: center;
}

.input-number-range {
  background-color: var(--system-background-color4);
  box-shadow: 0 0 0 1px var(--system-border-color3, var(--system-border-color3))
    inset;
  border-radius: 4px;
  max-width: 378px;
  padding: 0 10px;
}
.flex {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  .center {
    flex: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    margin: 0;
    font-size: 14px;
    word-break: keep-all;
    color: var(--system-font-color1);
  }
}
.is-disabled {
  background-color: #eef0f6;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}
</style>
