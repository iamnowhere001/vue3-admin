<template>
  <div class="act-table">
    <div class="act-table-header" v-if="slots.header">
      <slot name="header"> </slot>
    </div>
    <div
      class="act-table-content"
      :class="{
        'show-page': gridOptions.showPager && !slots.header,
        'show-header': !gridOptions.showPager && slots.header,
        'show-header-page': gridOptions.showPager && slots.header,
        'show-filter': gridOptions.filterabled,
        'no-header': !slots.header,
      }"
    >
      <vxe-grid
        v-bind="gridOptions"
        ref="xTable"
        :class="type"
        @checkbox-change="checkboxChangeEvent"
        @checkbox-all="checkboxChangeEvent"
        @custom="handleCustom"
        @radio-change="radioChange"
      >
        <template v-for="item in Object.keys(slots)" v-slot:[item]="{ row }">
          <slot :name="item" :row="row"></slot>
        </template>
        <template #empty>
          <div class="empty-container">
            <img src="@/assets/images/table-no-data.png" />
          </div>
        </template>
      </vxe-grid>
    </div>
    <div class="act-table-pager" v-if="gridOptions.showPager">
      <vxe-pager
        :layouts="[
          'Total',
          'Sizes',
          'PrevJump',
          'PrevPage',
          'Number',
          'NextPage',
          'NextJump',
          'FullJump',
        ]"
        v-model:current-page="options.tablePage.currentPage"
        v-model:page-size="options.tablePage.pageSize"
        :total="options.tablePage.total"
        @page-change="handlePageChange"
      >
      </vxe-pager>
    </div>
    <div class="act-table-footer" v-if="slots.footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, useSlots, nextTick, ref, onMounted } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [],
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  type: {
    type: String,
    default: "",
  },
  isFull: {
    type: Boolean,
    default: true,
  },
});
const emits = defineEmits([
  "pageChange",
  "checkboxChange",
  "visibleColChange",
  "radioChange",
]);

const slots = useSlots();
const store = useStore();
const xTable = ref(null);

const defaultOptions = {
  border: false, //边框
  height: "auto", //高度
  align: "left", //对齐方式
  loading: false, //加载
  filterabled: false, //筛选功能
  stripe: false, // 斑马线
  showPager: false, //展示分页
  size: "mini", //尺寸
  tablePage: {
    currentPage: 1,
    pageSize: 10,
    total: 0,
  },
  checkboxConfig: { highlight: true },
};

const gridOptions = computed(() => {
  const permissions = store.state.user.permissions;
  const columns = props.columns.filter(
    (col) => !col.permission || permissions.includes(col.permission)
  );
  const { tablePage } = {
    ...defaultOptions,
    ...props.options,
  };
  const options = {
    ...defaultOptions,
    ...props.options,
    columnConfig: {
      resizable: true,
    },
    seqConfig: {
      startIndex: (tablePage.currentPage - 1) * tablePage.pageSize,
      ...props.options?.seqConfig,
    },
    checkboxConfig: {
      highlight: true,
      ...props.options?.checkboxConfig,
    },
    columns: columns.map((item) => {
      let specialCol = ["checkbox", "seq", "expand"];
      if (item.type && specialCol.indexOf(item.type) !== -1) {
        item.field = item.type;
      }
      return {
        align: "center",
        showOverflow: !item.slots,
        ...item,
      };
    }),
    data: [...props.data],
  };
  if (props.options.filterabled) {
    options.toolbarConfig = {
      custom: true,
    };
  }
  return options;
});

// 分页
function handlePageChange({ currentPage, pageSize }) {
  emits("pageChange", { currentPage, pageSize });
}

// 展开所有
function expandAll() {
  const $grid = xTable.value;
  $grid.setAllTreeExpand(true);
}

// 展开指定行
function expandTreeByKeys(keys) {
  const $grid = xTable.value;
  keys.forEach((key) => {
    const row = $grid.getRowById(key);
    $grid.setTreeExpand(row, true);
  });
}

// 复选框勾选
function checkboxChangeEvent() {
  const $grid = xTable.value;
  let isAllChecked = $grid.isAllCheckboxChecked();
  let selectRecords = $grid.getCheckboxRecords();
  emits("checkboxChange", { isAllChecked, selectRecords });
}

// 默认勾选
function checkRow(list) {
  let rows = [];
  list.forEach((id) => {
    let row = props.data.find((row) => row.id == id);
    if (row) {
      rows.push(row);
    }
  });
  const $grid = xTable.value;
  $grid.setCheckboxRow(rows, true);
}

// 默认单选
function radioRow(row) {
  const $grid = xTable.value;
  $grid.setRadioRow(row);
}

// 用于 checkbox-config.reserve，获取已保留选中的行数据
function getReserveRecords() {
  const $grid = xTable.value;
  return [...$grid.getCheckboxReserveRecords(), ...$grid.getCheckboxRecords()];
}

// 用于 checkbox-config.reserve，手动清空用户保留选中的行数据
function clearCheckboxReserve() {
  const $grid = xTable.value;
  return $grid.clearCheckboxReserve();
}

//单选事件
function radioChange(item) {
  emits("radioChange", item);
}

// 自定义列勾选事件
function handleCustom({ type }) {
  if (type === "confirm") {
    const $grid = xTable.value;
    const visibleCols = $grid.getColumns().map((item) => item.property);
    emits("visibleColChange", visibleCols);
  }
  if (type === "reset") {
    const visibleCols = gridOptions.value.columns.map((item) => item.field);
    emits("visibleColChange", visibleCols);
  }
}

// 导出excel
function exportCsv() {
  const $grid = xTable.value;
  $grid.exportData({ type: "csv" });
}

defineExpose({
  expandAll,
  exportCsv,
  checkRow,
  radioRow,
  expandTreeByKeys,
  getReserveRecords,
  clearCheckboxReserve,
});
</script>

<style lang="scss" scoped>
.act-table {
  height: 100%;
  position: relative;
  background-color: var(--system-page-background-color);
  .act-table-header {
    height: 52px;
    width: 80%;
    z-index: 999;
    position: absolute;
    top: 0;
    left: 10px;
    display: flex;
    align-items: center;
  }
  .act-table-content {
    height: 100%;
    padding-top: 60px;
    &.show-page {
      height: calc(100% - 48px);
    }
    &.show-header {
      height: calc(100% - 52px);
    }
    &.show-header-page {
      height: calc(100% - 60px);
    }
    &.show-filter {
      padding-top: 0;
      height: calc(100% - 78px);
    }
    &.no-header {
      padding-top: 0;
    }
  }
  .act-table-footer {
    position: absolute;
    bottom: 45px;
    left: 10px;
  }
}
</style>
