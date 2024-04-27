import { defineComponent } from "vue";

const ActTag = defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    mapping: {
      type: Array,
      default: () => [],
    },
  },
  render() {
    const item = this.mapping.find((item) => item.value === this.value);
    if (item) {
      return (
        <>
          <el-tag {...item}>{item.label}</el-tag>
        </>
      );
    }
    return (
      <>
        <el-tag type="info">{this.value}</el-tag>
      </>
    );
  },
});

export default ActTag;
