<template>
  <div class="element-select system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <div>
        <el-select v-model="value" class="m-2" size="large">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="value" class="m-2">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="value" class="m-2"  size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">有禁用选项</span>
      </template>
      <div>
        <el-select v-model="value1">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">禁用状态</span>
      </template>
      <div>
        <el-select v-model="value2" disabled>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">可清空单选</span>
      </template>
      <div>
        <el-select v-model="value3" clearable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">基础多选</span>
      </template>
      <div class="m-4">
        <p>默认</p>
        <el-select
          v-model="value4"
          multiple
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="m-4">
        <p>使用 collapse-tags</p>
        <el-select
          v-model="value5"
          multiple
          collapse-tags
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="m-4">
        <p>使用 collapse-tags-tooltip</p>
        <el-select
          v-model="value6"
          multiple
          collapse-tags
          collapse-tags-tooltip
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="m-4">
        <p>使用 max-collapse-tags</p>
        <el-select
          v-model="value7"
          multiple
          collapse-tags
          collapse-tags-tooltip
          :max-collapse-tags="3"
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">自定义模板</span>
      </template>
      <div>
        <el-select v-model="value8">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <span style="float: left">{{ item.label }}</span>
            <span
              style="
                float: right;
                color: var(--el-text-color-secondary);
                font-size: 13px;
              "
              >{{ item.value }}</span
            >
          </el-option>
        </el-select>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">将选项进行分组</span>
      </template>
      <div>
        <el-select v-model="value9">
          <el-option-group
            v-for="group in options2"
            :key="group.label"
            :label="group.label"
          >
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-option-group>
        </el-select>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">筛选选项</span>
      </template>
      <div>
        <el-select v-model="value10" filterable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">远程搜索</span>
      </template>
      <div>
        <div class="flex flex-wrap">
          <div class="m-4">
            <p>默认</p>
            <el-select
              v-model="value11"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键字"
              :remote-method="remoteMethod"
              :loading="loading"
            >
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="m-4">
            <p>使用 remote-show-suffix</p>
            <el-select
              v-model="value11"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键字"
              remote-show-suffix
              :remote-method="remoteMethod"
              :loading="loading"
            >
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">创建新的选项</span>
      </template>
      <div>
        <el-select
          v-model="value12"
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="为您的文章选择标签"
        >
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

//#region 基础用法
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: '备选项1',
  },
  {
    value: 'Option2',
    label: '备选项2',
  },
  {
    value: 'Option3',
    label: '备选项3',
  },
  {
    value: 'Option4',
    label: '备选项4',
  },
  {
    value: 'Option5',
    label: '备选项5',
  },
]
//#endregion

//#region 有禁用选项
const value1 = ref('')
const options1 = [
  {
    value: 'Option1',
    label: '备选项1',
  },
  {
    value: 'Option2',
    label: '备选项2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: '备选项3',
  },
  {
    value: 'Option4',
    label: '备选项4',
  },
  {
    value: 'Option5',
    label: '备选项5',
  },
]
//#endregion

//#region 禁用状态
const value2 = ref('')
//#endregion

//#region 可清空单选
const value3 = ref('')
//#endregion

//#region 基础多选
const value4 = ref([])
const value5 = ref([])
const value6 = ref([])
const value7 = ref([])
//#endregion

//#region 自定义模板
const value8 = ref('')
const cities = [
  {
    value: 'Beijing',
    label: '北京',
  },
  {
    value: 'Shanghai',
    label: '上海',
  },
  {
    value: 'Nanjing',
    label: '南京',
  },
  {
    value: 'Chengdu',
    label: '成都',
  },
  {
    value: 'Shenzhen',
    label: '深圳',
  },
  {
    value: 'Guangzhou',
    label: '广州',
  },
]
//#endregion

//#region 将选项进行分组
const value9 = ref('')
const options2 = [
  {
    label: '热门城市',
    options: [
      {
        value: 'Shanghai',
        label: '上海',
      },
      {
        value: 'Beijing',
        label: '北京',
      },
    ],
  },
  {
    label: '城市名称',
    options: [
      {
        value: 'Chengdu',
        label: '成都',
      },
      {
        value: 'Shenzhen',
        label: '深圳',
      },
      {
        value: 'Guangzhou',
        label: '广州',
      },
      {
        value: 'Wuhan',
        label: '武汉',
      },
    ],
  },
]
//#endregion

//#region 筛选选项
const value10 = ref('')
//#endregion

//#region 远程搜索
const list = ref([])
const options3 = ref([])
const value11 = ref([])
const loading = ref(false)

onMounted(() => {
  list.value = states.map((item) => {
    return { value: `value:${item}`, label: `label:${item}` }
  })
})

const remoteMethod = (query) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options3.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options3.value = []
  }
}

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
//#endregion

//#region  创建新的选项
const value12 = ref([])
const options4 = [
  {
    value: 'HTML',
    label: 'HTML',
  },
  {
    value: 'CSS',
    label: 'CSS',
  },
  {
    value: 'JavaScript',
    label: 'JavaScript',
  },
]
//#endregion
</script>

<style lang="scss" scoped>
.element-select {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
  .m-2 {
    margin: 0.5rem;
  }
  .m-4 {
    margin: 1rem;
    p {
      margin: 1rem 0;
      line-height: 1.7;
      font-size: 16px;
    }
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex {
    display: flex;
  }
}
</style>