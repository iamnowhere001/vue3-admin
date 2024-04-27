<template>
  <div class="element-dialog system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-button text @click="dialogVisible = true">
        单击打开对话框
      </el-button>
      <el-dialog
        v-model="dialogVisible"
        title="提示"
        width="30%"
        :before-close="handleClose"
      >
        <span>这是一条信息!</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义内容</span>
      </template>
      <el-button text @click="dialogTableVisible = true">
        打开一个表格嵌套对话框
      </el-button>
      <el-dialog v-model="dialogTableVisible" title="送货地址">
        <el-table :data="gridData">
          <el-table-column property="date" label="日期" width="150" />
          <el-table-column property="name" label="名字" width="200" />
          <el-table-column property="address" label="地址" />
        </el-table>
      </el-dialog>
      <!-- Form -->
      <el-button text @click="dialogFormVisible = true">
        打开一个表单嵌套对话框
      </el-button>
      <el-dialog v-model="dialogFormVisible" title="送货地址">
        <el-form :model="form">
          <el-form-item label="促销活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择一个区域">
              <el-option label="Zone No.1" value="shanghai" />
              <el-option label="Zone No.2" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义头部</span>
      </template>
      <el-button @click="visible = true">
        打开带有自定义标题的对话框
      </el-button>
      <el-dialog v-model="visible" :show-close="false">
        <template #header="{ close, titleId, titleClass }">
          <div class="my-header">
            <h4 :id="titleId" :class="titleClass">这是一个自定义的头部!</h4>
            <el-button type="danger" @click="close">
              <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
              关闭
            </el-button>
          </div>
        </template>
        这是对话框内容。
      </el-dialog>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">嵌套的对话框</span>
      </template>
      <el-button text @click="outerVisible = true">
        打开外部对话框
      </el-button>
      <el-dialog v-model="outerVisible" title="外部对话框">
        <template #default>
          <el-dialog
            v-model="innerVisible"
            width="30%"
            title="内部对话框"
            append-to-body
          />
        </template>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="outerVisible = false">取消</el-button>
            <el-button type="primary" @click="innerVisible = true">
              打开内部对话框
            </el-button>
          </div>
        </template>
      </el-dialog>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">内容居中</span>
      </template>
      <el-button text @click="centerDialogVisible = true">
        单击打开对话框
      </el-button>
      <el-dialog v-model="centerDialogVisible" title="警告" width="30%" center>
        <span>
          应该注意的是，默认情况下，内容不会在中间对齐
        </span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">居中对话框</span>
      </template>
      <el-button text @click="centerDialogVisible1 = true">
        单击打开对话框
      </el-button>
      <el-dialog
        v-model="centerDialogVisible1"
        title="警告"
        width="30%"
        align-center
      >
        <span>从屏幕中心打开对话框</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="centerDialogVisible1 = false">取消</el-button>
            <el-button type="primary" @click="centerDialogVisible1 = false">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">关闭时销毁</span>
      </template>
      <el-button text @click="centerDialogVisible2 = true">
        单击打开对话框
      </el-button>
      <el-dialog
        v-model="centerDialogVisible2"
        title="通知"
        width="30%"
        destroy-on-close
        center
      >
        <span>
          注意:在第一次打开对话框之前，这个节点和下面的节点将不会被渲染
        </span>
        <div>
          <strong>额外的内容(未渲染)</strong>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="centerDialogVisible2 = false">取消</el-button>
            <el-button type="primary" @click="centerDialogVisible2 = false">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">可拖拽对话框</span>
      </template>
      <el-button text @click="dialogVisible1 = true">
        单击打开对话框
      </el-button>
      <el-dialog v-model="dialogVisible1" title="提示" width="30%" draggable>
        <span>它是一个可拖动的对话框</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible1 = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible1 = false">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'

//#region 基础用法
const dialogVisible = ref(false)

const handleClose = (done) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
//#endregion

//#region 自定义内容
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

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
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
//#endregion

//#region 自定义头部
const visible = ref(false)
//#endregion

//#region 嵌套的对话框
const outerVisible = ref(false)
const innerVisible = ref(false)
//#endregion

//#region 内容居中
const centerDialogVisible = ref(false)
//#endregion

//#region 居中对话框
const centerDialogVisible1 = ref(false)
//#endregion

//#region 关闭时销毁
const centerDialogVisible2 = ref(false)
//#endregion

//#region 可拖拽对话框
const dialogVisible1 = ref(false)
//#endregion
</script>

<style lang="scss" scoped>
.element-dialog {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>