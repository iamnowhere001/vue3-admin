<template>
  <div class="element-tree system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">可选择</span>
      </template>
      <div>
        <el-tree
          :props="props"
          :load="loadNode"
          lazy
          show-checkbox
          @check-change="handleCheckChange"
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">懒加载自定义叶子节点</span>
      </template>
      <div>
        <el-tree :props="props1" :load="loadNode1" lazy show-checkbox />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">禁用复选框</span>
      </template>
      <div>
        <el-tree :data="data1" :props="defaultProps1" show-checkbox />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">默认展开以及默认选中</span>
      </template>
      <div>
        <el-tree
          :data="data2"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps2"
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">树节点的选择</span>
      </template>
      <el-tree
        ref="treeRef"
        :data="data3"
        show-checkbox
        default-expand-all
        node-key="id"
        highlight-current
        :props="defaultProps3"
      />
      <div class="buttons">
        <el-button @click="getCheckedNodes">get by node</el-button>
        <el-button @click="getCheckedKeys">get by key</el-button>
        <el-button @click="setCheckedNodes">set by node</el-button>
        <el-button @click="setCheckedKeys">set by key</el-button>
        <el-button @click="resetChecked">reset</el-button>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义节点内容</span>
      </template>
      <div class="custom-tree-container">
        <p>Using render-content</p>
        <el-tree
          :data="dataSource"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent"
        />
        <p>Using scoped slot</p>
        <el-tree
          :data="dataSource"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span>
                <a @click="append(data)"> Append </a>
                <a style="margin-left: 8px" @click="remove(node, data)"> Delete </a>
              </span>
            </span>
          </template>
        </el-tree>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义节点类名</span>
      </template>
      <div class="custom-tree-node-container">
        <el-tree
          :data="data4"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :props="{ class: customNodeClass }"
        />
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">树节点过滤</span>
      </template>
      <el-input v-model="filterText" placeholder="Filter keyword" />

      <el-tree
        ref="treeRef1"
        class="filter-tree"
        :data="data5"
        :props="defaultProps4"
        default-expand-all
        :filter-node-method="filterNode"
      />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">手风琴模式</span>
      </template>
      <el-tree
        :data="data6"
        :props="defaultProps5"
        accordion
        @node-click="handleNodeClick1"
      />
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">可拖拽节点</span>
      </template>
      <el-tree
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        :data="data7"
        draggable
        default-expand-all
        node-key="id"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
      />
    </el-card>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

//#region 基础用法
const data = ref([
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
])

const defaultProps = ref({
  children: 'children',
  label: 'label',
})

const handleNodeClick = (data) => {
  console.log(data)
}
//#endregion

//#region 可选择
let count = 1

const props = {
  label: 'name',
  children: 'zones',
}

const handleCheckChange = (
  data,
  checked,
  indeterminate
) => {
  console.log(data, checked, indeterminate)
}

const loadNode = (node, resolve) => {
  if (node.level === 0) {
    return resolve([{ name: 'Root1' }, { name: 'Root2' }])
  }
  if (node.level > 3) return resolve([])

  let hasChild = false
  if (node.data.name === 'region1') {
    hasChild = true
  } else if (node.data.name === 'region2') {
    hasChild = false
  } else {
    hasChild = Math.random() > 0.5
  }

  setTimeout(() => {
    let data = []
    if (hasChild) {
      data = [
        {
          name: `zone${count++}`,
        },
        {
          name: `zone${count++}`,
        },
      ]
    } else {
      data = []
    }

    resolve(data)
  }, 500)
}
//#endregion

//#region 懒加载自定义叶子节点
const props1 = {
  label: 'name',
  children: 'zones',
  isLeaf: 'leaf',
}

const loadNode1 = (node, resolve) => {
  if (node.level === 0) {
    return resolve([{ name: 'region' }])
  }
  if (node.level > 1) return resolve([])

  setTimeout(() => {
    const data = [
      {
        name: 'leaf',
        leaf: true,
      },
      {
        name: 'zone',
      },
    ]

    resolve(data)
  }, 500)
}
//#endregion

//#region 禁用复选框
const defaultProps1 = {
  children: 'children',
  label: 'label',
  disabled: 'disabled',
}

const data1 = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 3,
        label: 'Level two 2-1',
        children: [
          {
            id: 4,
            label: 'Level three 3-1-1',
          },
          {
            id: 5,
            label: 'Level three 3-1-2',
            disabled: true,
          },
        ],
      },
      {
        id: 2,
        label: 'Level two 2-2',
        disabled: true,
        children: [
          {
            id: 6,
            label: 'Level three 3-2-1',
          },
          {
            id: 7,
            label: 'Level three 3-2-2',
            disabled: true,
          },
        ],
      },
    ],
  },
]
//#endregion

//#region 默认展开以及默认选中
const defaultProps2 = {
  children: 'children',
  label: 'label',
}
const data2 = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
]
//#endregion

//#region 树节点的选择
const treeRef = ref(null)

const getCheckedNodes = () => {
  console.log(treeRef.value.getCheckedNodes(false, false))
}
const getCheckedKeys = () => {
  console.log(treeRef.value.getCheckedKeys(false))
}
const setCheckedNodes = () => {
  treeRef.value.setCheckedNodes(
    [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 9,
        label: 'Level three 1-1-1',
      },
    ],
    false
  )
}
const setCheckedKeys = () => {
  treeRef.value.setCheckedKeys([3], false)
}
const resetChecked = () => {
  treeRef.value.setCheckedKeys([], false)
}

const defaultProps3 = {
  children: 'children',
  label: 'label',
}

const data3 = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
]
//#endregion

//#region 自定义节点内容
let id = 1000
const append = (data) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  if (!data.children) {
    data.children = []
  }
  data.children.push(newChild)
  dataSource.value = [...dataSource.value]
}

const remove = (node, data) => {
  const parent = node.parent
  const children = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  dataSource.value = [...dataSource.value]
}

const renderContent = (
  h,
  {
    node,
    data,
    store,
  }
) => {
  return h(
    'span',
    {
      class: 'custom-tree-node',
    },
    h('span', null, node.label),
    h(
      'span',
      null,
      h(
        'a',
        {
          onClick: () => append(data),
        },
        'Append '
      ),
      h(
        'a',
        {
          style: 'margin-left: 8px',
          onClick: () => remove(node, data),
        },
        'Delete'
      )
    )
  )
}

const dataSource = ref([
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
])
//#endregion

//#region 自定义节点类名
const customNodeClass = (data, node) => {
  if (data.isPenultimate) {
    return 'is-penultimate'
  }
  return null
}

const data4 = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        isPenultimate: true,
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    isPenultimate: true,
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    isPenultimate: true,
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
]
//#endregion

//#region  树节点过滤
const filterText = ref('')
const treeRef1 = ref()

const defaultProps4 = {
  children: 'children',
  label: 'label',
}

watch(filterText, (val) => {
  treeRef1.value.filter(val)
})

const filterNode = (value, data) => {
  if (!value) return true
  return data.label.includes(value)
}

const data5 = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
]
//#endregion

//#region 手风琴模式
const handleNodeClick1 = (data) => {
  console.log(data)
}

const data6 = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
const defaultProps5 = {
  children: 'children',
  label: 'label',
}
//#endregion

//#region  可拖拽节点
const handleDragStart = (node, ev) => {
  console.log('drag start', node)
}
const handleDragEnter = (
  draggingNode,
  dropNode,
  ev
) => {
  console.log('tree drag enter:', dropNode.label)
}
const handleDragLeave = (
  draggingNode,
  dropNode,
  ev
) => {
  console.log('tree drag leave:', dropNode.label)
}
const handleDragOver = (draggingNode, dropNode, ev) => {
  console.log('tree drag over:', dropNode.label)
}
const handleDragEnd = (
  draggingNode,
  dropNode,
  dropType,
  ev
) => {
  console.log('tree drag end:', dropNode && dropNode.label, dropType)
}
const handleDrop = (
  draggingNode,
  dropNode,
  dropType,
  ev
) => {
  console.log('tree drop:', dropNode.label, dropType)
}
const allowDrop = (draggingNode, dropNode, type) => {
  if (dropNode.data.label === 'Level two 3-1') {
    return type !== 'inner'
  } else {
    return true
  }
}
const allowDrag = (draggingNode) => {
  return !draggingNode.data.label.includes('Level three 3-1-1')
}

const data7 = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
//#endregion
</script>

<style lang="scss">
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.is-penultimate > .el-tree-node__content {
  color: #626aef;
}

.el-tree-node.is-expanded.is-penultimate > .el-tree-node__children {
  display: flex;
  flex-direction: row;
}
.is-penultimate > .el-tree-node__children > div {
  width: 25%;
}
</style>

<style lang="scss" scoped>
.element-tree {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>