<template>
  <div class="element-drawer system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-radio-group v-model="direction">
        <el-radio label="ltr">从左到右</el-radio>
        <el-radio label="rtl">从右到左</el-radio>
        <el-radio label="ttb">从上到下</el-radio>
        <el-radio label="btt">从下到上</el-radio>
      </el-radio-group>
      <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
        打开
      </el-button>
      <el-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
        使用 footer
      </el-button>
      <el-drawer
        v-model="drawer"
        title="我就是标题"
        :direction="direction"
        :before-close="handleClose"
      >
        <span>你好,在那里!</span>
      </el-drawer>
      <el-drawer v-model="drawer2" :direction="direction">
        <template #header>
          <h4>按插槽设置标题</h4>
        </template>
        <template #default>
          <div>
            <el-radio v-model="radio1" label="选项 1" size="large"
              >选项 1</el-radio
            >
            <el-radio v-model="radio1" label="选项 2" size="large"
              >选型 2</el-radio
            >
          </div>
        </template>
        <template #footer>
          <div style="flex: auto">
            <el-button @click="cancelClick">取消</el-button>
            <el-button type="primary" @click="confirmClick">确定</el-button>
          </div>
        </template>
      </el-drawer>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">不添加 标题</span>
      </template>
      <el-button type="primary" style="margin-left: 16px" @click="drawer1 = true">
        打开
      </el-button>
      <el-drawer v-model="drawer1" title="我就是标题" :with-header="false">
        <span>大家好!</span>
      </el-drawer>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义内容</span>
      </template>
      <el-button text @click="table = true"
      >打开抽屉与嵌套的表格</el-button
    >
    <el-button text @click="dialog = true"
      >使用嵌套形式打开抽屉</el-button
    >
    <el-drawer
      v-model="table"
      title="我有一个嵌套的表格里面!"
      direction="rtl"
      size="50%"
    >
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150" />
        <el-table-column property="name" label="姓名" width="200" />
        <el-table-column property="address" label="地址" />
      </el-table>
    </el-drawer>
    <el-drawer
      ref="drawerRef"
      v-model="dialog"
      title="我有一个嵌套的形式在里面!"
      :before-close="handleClose1"
      direction="ltr"
      class="demo-drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="名字" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="区域" :label-width="formLabelWidth">
            <el-select
              v-model="form.region"
              placeholder="请选择活动区域"
            >
              <el-option label="Area1" value="上海" />
              <el-option label="Area2" value="北京" />
            </el-select>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取消</el-button>
          <el-button type="primary" :loading="loading" @click="onClick">{{
            loading ? '提交…' : '提交'
          }}</el-button>
        </div>
      </div>
    </el-drawer>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义头部</span>
      </template>
      <el-button @click="visible = true">
        打开带有自定义标题的抽屉
      </el-button>
      <el-drawer v-model="visible" :show-close="false">
        <template #header="{ close, titleId, titleClass }">
          <h4 :id="titleId" :class="titleClass">这是一个自定义头部!</h4>
          <el-button type="danger" @click="close">
            <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
            关闭
          </el-button>
        </template>
        这是抽屉里的内容。
      </el-drawer>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">嵌套抽屉</span>
      </template>
      <el-button type="primary" style="margin-left: 16px" @click="drawer3 = true">
        打开
      </el-button>
      <el-drawer v-model="drawer3" title="我是外部抽屉" size="50%">
        <div>
          <el-button @click="innerDrawer = true">点击我!</el-button>
          <el-drawer
            v-model="innerDrawer"
            title="我是内部的抽屉"
            :append-to-body="true"
            :before-close="handleClose2"
          >
            <p>_(:зゝ∠)_</p>
          </el-drawer>
        </div>
      </el-drawer>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElDrawer, ElMessageBox } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'

//#region 基础用法
const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref('rtl')
const radio1 = ref('Option 1')
const handleClose = (done) => {
  ElMessageBox.confirm('你确定要把这关了吗?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
function cancelClick() {
  drawer2.value = false
}
function confirmClick() {
  ElMessageBox.confirm(`你确定要选 ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false
    })
    .catch(() => {
      // catch error
    })
}
//#endregion

//#region 不添加 Title
const drawer1 = ref(false)
//#endregion

//#region 自定义内容
const formLabelWidth = '80px'
let timer

const table = ref(false)
const dialog = ref(false)
const loading = ref(false)

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const gridData = [
  {
    date: '2016-05-02',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-04',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-01',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-03',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
]

const drawerRef = ref()
const onClick = () => {
  drawerRef.value.close()
}

const handleClose1 = (done) => {
  if (loading.value) {
    return
  }
  ElMessageBox.confirm('你想提交吗?')
    .then(() => {
      loading.value = true
      timer = setTimeout(() => {
        done()
        // 动画关闭需要一定的时间
        setTimeout(() => {
          loading.value = false
        }, 400)
      }, 2000)
    })
    .catch(() => {
      // catch error
    })
}

const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}
//#endregion

//#region 自定义头部
const visible = ref(false)
//#endregion

//#region 嵌套抽屉
const drawer3 = ref(false)
const innerDrawer = ref(false)

const handleClose2 = (done) => {
  ElMessageBox.confirm('您还有未保存的数据，继续吗?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
//#endregion
</script>

<style lang="scss" scoped>
.element-drawer {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>