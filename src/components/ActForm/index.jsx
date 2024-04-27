import {
  defineComponent,
  reactive,
  watch,
  ref,
  computed,
  toRaw,
  onBeforeMount,
} from "vue";
import InputNumberRange from "@/components/InputNumberRange/index.vue";
import createItem from "./createItem";
import "./index.scss";
import { useStore } from "vuex";
import { getDictList } from "@/api/system/dictionary";

const ActForm = defineComponent({
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    labelWidth: {
      type: Number,
      default: 80,
    },
    initForm: {
      type: Object,
      default: () => ({}),
    },
    inline: {
      // 行内表单
      type: Boolean,
      default: false,
    },
    labelSuffix: {
      // 表单域标签的后缀
      type: String,
      default: "",
    },
    labelPosition: {
      // 表单域标签的位置
      type: String,
      default: "right",
    },
    showButtons: {
      // 是否显示按钮
      type: Boolean,
      default: false,
    },
    buttonConfig: {
      //按钮配置
      type: Object,
      default: () => {},
    },
  },
  components: {
    InputNumberRange,
  },
  emits: ["submit", "cancel"],
  setup(props, context) {
    const state = reactive({
      form: {},
    });
    const store = useStore();
    const formRef = ref(null);
    const buttonConfig = computed(() => {
      return {
        show: false,
        confirmText: "确定",
        cancelText: "取消",
        showConfirm: true,
        showCancel: true,
        align: "center",
        style: "",
        ...props.buttonConfig,
      };
    });

    watch(
      () => props.initForm,
      (form) => {
        state.form = form;
      },
      { immediate: true }
    );

    onBeforeMount(async () => {
      props.options.forEach(async (item) => {
        if (item.url) {
          item.options = await getDictListData(item.url);
        }
      });
    });

    function onSubmit(fn) {
      if (!formRef.value) return;
      formRef.value.validate((valid, fields) => {
        if (valid) {
          if (typeof fn === "function") {
            fn(state.form);
          } else {
            context.emit("submit", state.form);
          }
        } else {
          console.log("error submit!", fields);
        }
      });
    }

    function onCancel() {
      context.emit("cancel");
    }

    function reset() {
      if (!formRef.value) return;
      formRef.value.resetFields();
    }

    async function getDictListData(url) {
      const res = await getDictList(url);
      if (res.code === 200) {
        return res.data;
      }
    }

    context.expose({ submit: onSubmit, cancel: onCancel, reset });

    return () => (
      <>
        <div className="act-form">
          <el-form
            ref={formRef}
            model={state.form}
            label-width={props.labelWidth}
            inline={props.inline}
            label-suffix={props.labelSuffix}
            label-position={props.labelPosition}
          >
            {props.options.map((item) => {
              const permissions = store.state.user.permissions;
              if (item.permission && !permissions.includes(item.permission))
                return null;
              if (item.hidden) return null;
              const keys = Object.keys(item);
              if (!keys.includes("clearable")) {
                item.clearable = true;
              }
              return (
                <el-form-item
                  label={item.label}
                  prop={item.prop}
                  rules={item.rules ?? []}
                >
                  {createItem(item, state, context)}
                </el-form-item>
              );
            })}
            {buttonConfig.value.show ? (
              <el-form-item
                class="form-buttons"
                style={buttonConfig.value.style}
              >
                <div
                  style={`text-align:${buttonConfig.value.align};width:100%;`}
                >
                  {buttonConfig.value.showCancel ? (
                    <el-button onClick={onCancel}>
                      {buttonConfig.value.cancelText}
                    </el-button>
                  ) : (
                    ""
                  )}
                  {buttonConfig.value.showConfirm ? (
                    <el-button type="primary" onClick={onSubmit}>
                      {buttonConfig.value.confirmText}
                    </el-button>
                  ) : (
                    ""
                  )}
                </div>
              </el-form-item>
            ) : (
              ""
            )}
          </el-form>
        </div>
      </>
    );
  },
});

export default ActForm;
