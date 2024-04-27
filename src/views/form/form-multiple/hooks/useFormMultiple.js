import { reactive, onBeforeMount, onMounted, toRefs } from "vue";
import { ElMessage } from "element-plus";

export function useFormMultiple(formRef1, formRef2, formRef3) {
  const state = reactive({
    nextDisabled: true,
    form: {
      companyName: "",
      companyType: "",
      companyCertificate: "",
      website: "",
      area: "",
      name: "",
      certificateType: "",
      certificateId: "",
      phone: "",
      email: "",
      personName: "",
      personCertificateType: "",
      personCertificateId: "",
      personPhone: "",
      personEmail: "",
    },
    options1: [
      {
        label: "单位名称",
        type: "input",
        prop: "companyName",
        placeholder: "请输入单位名称",
        rules: [
          {
            required: true,
            message: "单位名称不能为空",
            trigger: "blur",
          },
          {
            min: 5,
            max: 20,
            message: "名称长度在5到20之间",
            trigger: "blur",
          },
        ],
      },
      {
        label: "单位性质",
        type: "select",
        prop: "companyType",
        placeholder: "请选择单位性质",
        options: [
          { value: 1, label: "民营" },
          { value: 2, label: "国企" },
          { value: 3, label: "合资" },
        ],
        rules: [
          {
            required: true,
            message: "单位性质不能为空",
            trigger: "change",
          },
        ],
      },
      {
        label: "单位证件类型",
        type: "select",
        prop: "companyCertificate",
        placeholder: "请选择单位证件类型",
        options: [
          { value: 1, label: "​统一社会信用代码" },
          { value: 2, label: "营业执照" },
          { value: 3, label: "其他" },
        ],
        rules: [
          {
            required: true,
            message: "单位证件类型不能为空",
            trigger: "change",
          },
        ],
      },
      {
        label: "官方网站",
        type: "input",
        prop: "website",
        placeholder: "请输入官方网站",
        rules: [
          {
            required: true,
            message: "官方网站不能为空",
            trigger: "blur",
          },
        ],
      },
      {
        label: "地区",
        type: "cascader",
        prop: "area",
        url: "/mock/dictionary/area",
        props: {
          label: "name",
          value: "code",
        },
        rules: [{ required: true, message: "请选择地区", trigger: "change" }],
      },
    ],
    options2: [
      {
        label: "法定代表人姓名",
        type: "input",
        prop: "name",
        placeholder: "请输入法定代表人姓名",
        rules: [
          {
            required: true,
            message: "法定代表人姓名不能为空",
            trigger: "blur",
          },
          {
            min: 2,
            max: 5,
            message: "法定代表人姓名长度在2到5之间",
            trigger: "blur",
          },
        ],
      },
      {
        label: "法定代表人证件类型",
        type: "select",
        prop: "certificateType",
        placeholder: "请选择法定代表人证件",
        options: [
          { value: 1, label: "身份证" },
          { value: 2, label: "护照" },
          { value: 3, label: "其他" },
        ],
        rules: [
          {
            required: true,
            message: "法定代表人证件类型不能为空",
            trigger: "change",
          },
        ],
      },
      {
        label: "法定代表人证件号",
        type: "input",
        prop: "certificateId",
        placeholder: "请输入法定代表人证件号",
        rules: [
          {
            required: true,
            message: "法定代表人证件号不能为空",
            trigger: "change",
          },
        ],
      },
      {
        label: "法定代表人手机号",
        type: "input",
        prop: "phone",
        placeholder: "请输入法定代表人手机号",
        rules: [
          {
            required: true,
            message: "法定代表人手机号不能为空",
            trigger: "change",
          },
        ],
      },
      {
        label: "法定代表人邮箱",
        type: "input",
        prop: "email",
        placeholder: "请输入法定代表人邮箱",
        rules: [
          {
            required: true,
            message: "法定代表人邮箱不能为空",
            trigger: "change",
          },
        ],
      },
    ],
    options3: [
      {
        label: "联系人姓名",
        type: "input",
        prop: "personName",
        placeholder: "请输入联系人姓名",
        rules: [
          {
            required: true,
            message: "联系人姓名不能为空",
            trigger: "blur",
          },
          {
            min: 2,
            max: 5,
            message: "联系人姓名长度在2到5之间",
            trigger: "blur",
          },
        ],
      },
      {
        label: "联系人证件类型",
        type: "select",
        prop: "personCertificateType",
        placeholder: "请选择联系人证件",
        options: [
          { value: 1, label: "身份证" },
          { value: 2, label: "护照" },
          { value: 3, label: "其他" },
        ],
        rules: [
          {
            required: true,
            message: "联系人证件类型不能为空",
            trigger: "change",
          },
        ],
      },
      {
        label: "联系人证件号",
        type: "input",
        prop: "personCertificateId",
        placeholder: "请输入联系人证件号",
        rules: [
          {
            required: true,
            message: "联系人证件号不能为空",
            trigger: "change",
          },
        ],
      },
      {
        label: "联系人手机号",
        type: "input",
        prop: "personPhone",
        placeholder: "请输入联系人手机号",
        rules: [
          {
            required: true,
            message: "联系人手机号不能为空",
            trigger: "change",
          },
        ],
      },
      {
        label: "联系人邮箱",
        type: "input",
        prop: "personEmail",
        placeholder: "请输入联系人邮箱",
        rules: [
          {
            required: true,
            message: "联系人邮箱不能为空",
            trigger: "change",
          },
        ],
      },
    ],
  });

  function handleNextConfirm(activePageIndex) {
    formRef1.value &&
      formRef1.value.submit(() => {
        activePageIndex.value++;
      });
    formRef2.value &&
      formRef2.value.submit(() => {
        activePageIndex.value++;
      });
  }

  function handleConfirm() {
    formRef3.value &&
      formRef3.value.submit(() => {
        console.log(state.form);
        ElMessage.success("提交成功");
      });
  }

  onBeforeMount(() => {});

  onMounted(() => {});
  return {
    ...toRefs(state),
    handleConfirm,
    handleNextConfirm,
  };
}
