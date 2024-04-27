<template>
  <div class="element-messagebox system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">消息提示</span>
      </template>
      <el-button text @click="open">点击打开消息框</el-button>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">确认消息</span>
      </template>
      <el-button text @click="open1">点击打开消息框</el-button>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">提交内容</span>
      </template>
      <el-button text @click="open2">点击打开消息框</el-button>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">使用 VNode</span>
      </template>
      <el-button plain @click="open3">普通 VNode</el-button>
      <el-button plain @click="open4">动态 props</el-button>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">个性化</span>
      </template>
      <el-button text @click="open5">点击打开消息框</el-button>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">使用 HTML 片段</span>
      </template>
      <el-button text @click="open6">点击打开消息框</el-button>
    </el-card>
  </div>
</template>

<script setup>
import { h, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

//#region 消息提示
const open = () => {
  ElMessageBox.alert('这是一条信息', '标题', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
//#endregion

//#region 确认消息
const open1 = () => {
  ElMessageBox.confirm(
    '代理将永久删除该文件。继续吗?',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: '警告',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '删除完成',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '删除取消',
      })
    })
}
//#endregion

//#region 提交内容
const open2 = () => {
  ElMessageBox.prompt('请输入你的 e-mail', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: '无效 Email',
  })
    .then(({ value }) => {
      ElMessage({
        type: 'success',
        message: `你的 email 是:${value}`,
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '输入取消',
      })
    })
}
//#endregion

//#region 使用 VNode
const open3 = () => {
  ElMessageBox({
    title: '消息',
    message: h('p', null, [
      h('span', null, '消息可以是 '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

const open4 = () => {
  const checked = ref(false)
  ElMessageBox({
    title: '消息',
    // Should pass a function if VNode contains dynamic props
    message: () =>
      h(ElSwitch, {
        modelValue: checked.value,
        'onUpdate:modelValue': (val) => {
          checked.value = val
        },
      }),
  })
}
//#endregion

//#region 个性化
const open5 = () => {
  ElMessageBox({
    title: '消息',
    message: h('p', null, [
      h('span', null, '消息可以是 '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
    showCancelButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        instance.confirmButtonText = '正在加载...'
        setTimeout(() => {
          done()
          setTimeout(() => {
            instance.confirmButtonLoading = false
          }, 300)
        }, 3000)
      } else {
        done()
      }
    },
  }).then((action) => {
    ElMessage({
      type: 'info',
      message: `action: ${action}`,
    })
  })
}
//#endregion

//#region 使用 HTML 片段
const open6 = () => {
  ElMessageBox.alert(
    '<strong>代理是 <i>HTML</i> 字符</strong>',
    'HTML 字符',
    {
      dangerouslyUseHTMLString: true,
    }
  )
}
//#endregion
</script>

<style lang="scss" scoped>
.element-messagebox {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
}
</style>