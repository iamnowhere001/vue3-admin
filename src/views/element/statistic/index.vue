<template>
  <div class="element-statistic system-scrollbar">
    <el-card style="margin-bottom: 15px;margin-top: 10px;">
      <template #header>
        <span class="header-title">基础用法</span>
      </template>
      <el-row>
        <el-col :span="6">
          <el-statistic title="日活跃用户" :value="268500" />
        </el-col>
        <el-col :span="6">
          <el-statistic :value="138">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                男女比例
                <el-icon style="margin-left: 4px" :size="12">
                  <Male />
                </el-icon>
              </div>
            </template>
            <template #suffix>/100</template>
          </el-statistic>
        </el-col>
        <el-col :span="6">
          <el-statistic title="交易总额" :value="172000" />
        </el-col>
        <el-col :span="6">
          <el-statistic title="反馈编号" :value="562">
            <template #suffix>
              <el-icon style="vertical-align: -0.125em">
                <ChatLineRound />
              </el-icon>
            </template>
          </el-statistic>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">倒计时</span>
      </template>
      <el-row>
        <el-col :span="8">
          <el-countdown title="开始抓取" :value="value" />
        </el-col>
        <el-col :span="8">
          <el-countdown
            title="剩余VIP时间"
            format="HH:mm:ss"
            :value="value1"
          />
          <el-button class="countdown-footer" type="primary" @click="reset"
            >重置
          </el-button>
        </el-col>
        <el-col :span="8">
          <el-countdown format="DD [天] HH:mm:ss" :value="value2">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                <el-icon style="margin-right: 4px" :size="12">
                  <Calendar />
                </el-icon>
                直到下个月
              </div>
            </template>
          </el-countdown>
          <div class="countdown-footer">{{ value2.format('YYYY-MM-DD') }}</div>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-bottom: 15px;">
      <template #header>
        <span class="header-title">统计卡片</span>
      </template>
      <el-row :gutter="16">
        <el-col :span="8">
          <div class="statistic-card">
            <el-statistic :value="98500">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  每日活跃用户
                  <el-tooltip
                    effect="dark"
                    content="一天内登录该产品的用户数"
                    placement="top"
                  >
                    <el-icon style="margin-left: 4px" :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
            <div class="statistic-footer">
              <div class="footer-item">
                <span>与昨天相比</span>
                <span class="green">
                  24%
                  <el-icon>
                    <CaretTop />
                  </el-icon>
                </span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="statistic-card">
            <el-statistic :value="693700">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  每月活跃用户
                  <el-tooltip
                    effect="dark"
                    content="一个月内登录该产品的用户数"
                    placement="top"
                  >
                    <el-icon style="margin-left: 4px" :size="12">
                      <Warning />
                    </el-icon>
                  </el-tooltip>
                </div>
              </template>
            </el-statistic>
            <div class="statistic-footer">
              <div class="footer-item">
                <span>月环比</span>
                <span class="red">
                  12%
                  <el-icon>
                    <CaretBottom />
                  </el-icon>
                </span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="statistic-card">
            <el-statistic :value="72000" title="今日新增交易">
              <template #title>
                <div style="display: inline-flex; align-items: center">
                  今日新增交易
                </div>
              </template>
            </el-statistic>
            <div class="statistic-footer">
              <div class="footer-item">
                <span>与昨天相比</span>
                <span class="green">
                  16%
                  <el-icon>
                    <CaretTop />
                  </el-icon>
                </span>
              </div>
              <div class="footer-item">
                <el-icon :size="14">
                  <ArrowRight />
                </el-icon>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import { ChatLineRound, Male, Calendar,
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import dayjs from 'dayjs'

const value = ref(Date.now() + 1000 * 60 * 60 * 7)
const value1 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)
const value2 = ref(dayjs().add(1, 'month').startOf('month'))

function reset() {
  value1.value = Date.now() + 1000 * 60 * 60 * 24 * 2
}
</script>

<style lang="scss" scoped>
.element-statistic {
  overflow-y: auto;
  height: 100%;
  .header-title {
    font-size: 18px;
    font-weight: 500;
  }
  .el-col {
    text-align: center;
  }
  .countdown-footer {
    margin-top: 8px;
  }
  :global(h2#card-usage ~ .example .example-showcase) {
    background-color: var(--el-fill-color) !important;
  }
  .el-statistic {
    --el-statistic-content-font-size: 28px;
  }
  .statistic-card {
    height: 100%;
    padding: 20px;
    border-radius: 4px;
    background-color: var(--system-background-color2);
  }
  .statistic-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 12px;
    color: var(--el-text-color-regular);
    margin-top: 16px;
  }
  .statistic-footer .footer-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .statistic-footer .footer-item span:last-child {
    display: inline-flex;
    align-items: center;
    margin-left: 4px;
  }
  .green {
    color: var(--el-color-success);
  }
  .red {
    color: var(--el-color-error);
  }
}
</style>