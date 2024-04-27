
<template>
  <el-popover popper-class="daochu"
              placement="bottom"
              :width="50"
              trigger="click">
    <div class="d-c">
      <span v-if="exportType === '' || exportType === 'current'"
            @click="handleClickCurrent()">导出当前页</span>
      <span v-if="exportType === ''|| exportType === 'all'"
            @click="handleClickAll()">导出全部</span>
    </div>
    <template #reference>
      <el-button type="primary"
                 size="small"
                 :loading="loading">
        <el-icon style="vertical-align: middle">
          <Download />
        </el-icon>
        {{buttonText}}
      </el-button>
    </template>
  </el-popover>

</template>

<script setup>
// import XLSX from 'act-xlsx-style'
import XLSX from 'xlsx'
import FileSaver from 'file-saver'

const props = defineProps({
  exportCurrent: {
    type: Function,
    default: () => {
      return new Promise((resolve, reject) => {
        resolve([])
      })
    }
  },
  exportAll: {
    type: Function,
    default: () => {
      return new Promise((resolve, reject) => {
        resolve([])
      })
    }
  },
  exportType: {
    type: String,
    default: ''
  },
  titles: {
    // [{key:'id',value:'编号'},
    // {key:'name',value:'名称',formatter:(value)=>value+1}]
    type: Array,
    required: true
  },
  fileName: {
    type: String,
    default: 'exportExcle'
  },
  loading: Boolean,
  buttonText: {
    type: String,
    default: '导出'
  }
})

const defaultCellStyle = {
  // 设置表格中cell默认的字体，居中，颜色等
  font: { name: '宋体', sz: 11, color: { auto: 1 } },
  border: {
    color: { auto: 1 }
  },
  alignment: {
    /// 自动换行
    wrapText: 1,
    // 居中
    horizontal: 'center',
    vertical: 'center',
    indent: 0
  }
}

function handleClickCurrent() {
  // let loading = props.loading({ fullscreen: true })
  props.exportCurrent().then((res) => {
    handle(res)
    // loading.close()
  })
}
function handleClickAll() {
  props.exportAll().then((res) => {
    // let loading = props.loading({ fullscreen: true })
    if (res && res != null) {
      handle(res)
    }
    // loading.close()
  })
}
function handle(rows) {
  if (props.titles == null || props.titles.length === 0) {
    return
  }

  let excelRows = []
  let titleValue = []
  let titleKey = []
  let titleRender = []
  for (let i in props.titles) {
    if (
      props.titles[i].key != null &&
      props.titles[i].key !== '' &&
      props.titles[i].value !== false
    ) {
      titleValue.push(props.titles[i].value)
      titleKey.push(props.titles[i].key)
      if (props.titles[i].formatter) {
        titleRender.push(props.titles[i].formatter)
      } else {
        titleRender.push(null)
      }
    }
  }
  excelRows.push(titleValue)

  for (let p in rows) {
    let row = []
    for (let j in titleKey) {
      let col = rows[p][titleKey[j]]
      if (titleRender[j]) {
        col = titleRender[j](rows[p])
      }
      row.push(col)
    }
    excelRows.push(row)
  }
  exportData(excelRows)
}
function exportData(data) {
  // let data = [[1,2,3],[true, false, null, "sheetjs"],["foo","bar",new Date("2014-02-19T14:30Z"), "0.3"], ["baz", null, "qux"]]
  let ws_name = props.fileName
  let wb = { SheetNames: [], Sheets: {} }
  let ws = sheet_from_array_of_arrays(data)
  /*设置worksheet每列的最大宽度*/
  const colWidth = data.map((row) =>
    row.map((val) => {
      return {
        wch: 19.3
      }
    })
  )
  /*以第一行为初始值*/
  let result = colWidth[0]
  for (let i = 0; i < colWidth.length; i++) {
    for (let j = 0; j < colWidth[i].length; j++) {
      // if (result[j]['wch'] < colWidth[i][j]['wch']) {
      result[j]['wch'] = colWidth[i][j]['wch']
      //}
    }
  }
  ws['!cols'] = result
  // 设置每行的高度
  let colHeight = []
  for (let i = 0; i < data.length; i++) {
    colHeight.push({ hpx: 25 })
  }
  ws['!rows'] = colHeight
  let oDate = new Date()
  let year = oDate.getFullYear()
  let month = oDate.getMonth() + 1
  if (month < 10) {
    month = '0' + month
  }
  let day = oDate.getDate()
  if (day < 10) {
    day = '0' + day
  }
  let hour = oDate.getHours()
  if (hour < 10) {
    hour = '0' + hour
  }
  let minute = oDate.getMinutes()
  if (minute < 10) {
    minute = '0' + minute
  }
  let seconds = oDate.getSeconds()
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  let nowTime =
    year + '' + month + '' + day + '' + hour + '' + minute + '' + seconds
  wb.SheetNames.push(ws_name)
  wb.Sheets[ws_name] = ws
  let wbout = XLSX.write(wb, {
    bookType: 'xlsx',
    bookSST: true,
    type: 'binary'
  })
  FileSaver.saveAs(
    new Blob([s2ab(wbout)], { type: 'application/octet-stream' }),
    props.fileName + nowTime + '.xlsx'
  )
}
function datenum(v, date1904) {
  if (date1904) v += 1462
  let epoch = Date.parse(v)
  return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000)
}
function sheet_from_array_of_arrays(data, opts) {
  let ws = {}
  let range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } }
  for (let R = 0; R !== data.length; ++R) {
    for (let C = 0; C !== data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R
      if (range.s.c > C) range.s.c = C
      if (range.e.r < R) range.e.r = R
      if (range.e.c < C) range.e.c = C
      let cell = { v: data[R][C], s: defaultCellStyle }
      if (cell.v == null) continue
      let cell_ref = XLSX.utils.encode_cell({ c: C, r: R })

      if (typeof cell.v === 'number') cell.t = 'n'
      else if (typeof cell.v === 'boolean') cell.t = 'b'
      else if (cell.v instanceof Date) {
        cell.t = 'n'
        cell.z = XLSX.SSF._table[14]
        cell.v = datenum(cell.v)
      } else cell.t = 's'

      ws[cell_ref] = cell
    }
  }
  if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range)
  return ws
}
function s2ab(s) {
  let buf = new ArrayBuffer(s.length)
  let view = new Uint8Array(buf)
  for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
  return buf
}
</script>
