<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <!-- 設備總效率 -->
      <div class="col-12 col-md-3">
        <q-card flat bordered>
          <q-card-section>
            <div class="row items-center">
              <q-icon name="analytics" size="24px" color="primary" class="q-mr-sm" />
              <div class="text-subtitle1">設備總效率 (OEE)</div>
            </div>
            <div class="text-h3 q-mt-sm text-primary">98.2%</div>
            <div class="text-caption">當前效率</div>
            <div class="text-caption text-positive">
              <q-icon name="arrow_upward" size="16px" />
              +2.1% 較昨日
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- 日產量 -->
      <div class="col-12 col-md-3">
        <q-card flat bordered>
          <q-card-section>
            <div class="row items-center">
              <q-icon name="inventory" size="24px" color="primary" class="q-mr-sm" />
              <div class="text-subtitle1">日產量</div>
            </div>
            <div class="text-h3 q-mt-sm">15,847</div>
            <div class="text-caption">單位/天</div>
            <div class="text-caption text-positive">
              <q-icon name="arrow_upward" size="16px" />
              +347 較昨日
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- 品質良率 -->
      <div class="col-12 col-md-3">
        <q-card flat bordered>
          <q-card-section>
            <div class="row items-center">
              <q-icon name="verified" size="24px" color="primary" class="q-mr-sm" />
              <div class="text-subtitle1">品質良率</div>
            </div>
            <div class="text-h3 q-mt-sm">99.1%</div>
            <div class="text-caption">當前良率</div>
            <div class="text-caption text-negative">
              <q-icon name="arrow_downward" size="16px" />
              -0.3% 較昨日
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- 日營收 -->
      <div class="col-12 col-md-3">
        <q-card flat bordered>
          <q-card-section>
            <div class="row items-center">
              <q-icon name="payments" size="24px" color="primary" class="q-mr-sm" />
              <div class="text-subtitle1">日營收</div>
            </div>
            <div class="text-h3 q-mt-sm">$1.2M</div>
            <div class="text-caption">美元</div>
            <div class="text-caption text-positive">
              <q-icon name="arrow_upward" size="16px" />
              +8.5% 較昨日
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- 本月產量趨勢圖 -->
      <div class="col-12 col-md-6">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-subtitle1">本月產量趨勢 (訂單量、套架數)</div>
            <div class="chart-container" ref="monthlyChartRef"></div>
          </q-card-section>
        </q-card>
      </div>

      <!-- 近三年產品區域分析 -->
      <div class="col-12 col-md-6">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-subtitle1">近三年 (訂單量、套架數) 產品區域分析</div>
            <div class="chart-container" ref="yearlyChartRef"></div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const monthlyChartRef = ref<HTMLElement | null>(null)
const yearlyChartRef = ref<HTMLElement | null>(null)

const initMonthlyChart = () => {
  if (!monthlyChartRef.value) return
  const chart = echarts.init(monthlyChartRef.value)
  
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [500, 450, 500, 570, 400, 450, 380, 500, 450, 500, 550, 450, 500, 350, 480],
      type: 'line',
      areaStyle: {
        opacity: 0.2
      },
      smooth: true
    }]
  }
  
  chart.setOption(option)
}

const initYearlyChart = () => {
  if (!yearlyChartRef.value) return
  const chart = echarts.init(yearlyChartRef.value)
  
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['2023年', '2024年']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '2023年',
        type: 'line',
        data: [8000, 12000, 15000, 18000, 22000, 25000, 28000, 25000, 20000, 18000, 15000, 22000],
        smooth: true
      },
      {
        name: '2024年',
        type: 'line',
        data: [5000, 8000, 12000, 15000, 18000, 20000, 23000, 21000, 18000, 15000, 13000, 25000],
        smooth: true
      }
    ]
  }
  
  chart.setOption(option)
}

onMounted(() => {
  initMonthlyChart()
  initYearlyChart()
})
</script>

<style scoped>
.chart-container {
  height: 300px;
  margin-top: 20px;
}

:deep(.q-card) {
  box-shadow: none;
}
</style> 