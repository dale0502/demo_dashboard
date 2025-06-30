<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="row items-center justify-between">
              <div class="text-h6">生產分析</div>
              <q-btn-group flat>
                <q-btn :color="productType === 'total' ? 'primary' : 'grey'" label="本月產量" @click="productType = 'total'" />
                <q-btn :color="productType === 'daily' ? 'primary' : 'grey'" label="日均產量" @click="productType = 'daily'" />
                <q-btn :color="productType === 'monthly' ? 'primary' : 'grey'" label="月度產量" @click="productType = 'monthly'" />
              </q-btn-group>
            </div>
          </q-card-section>

          <q-card-section>
            <div class="chart" ref="productionChartRef"></div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="text-h6">產品統計表</div>
          </q-card-section>

          <q-card-section>
            <q-table
              :rows="tableData"
              :columns="columns"
              row-key="product"
              flat
              bordered
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const productType = ref('total')
const productionChartRef = ref()
let chart: echarts.ECharts | null = null

const columns = [
  { name: 'business', label: '事業部', field: 'business', align: 'left' as const },
  { name: 'product', label: '產品', field: 'product', align: 'left' as const },
  { name: 'unit', label: '單位', field: 'unit', align: 'left' as const },
  { name: 'realInput', label: '實際入庫量', field: 'realInput', align: 'right' as const },
  { name: 'planInput', label: '目標產量', field: 'planInput', align: 'right' as const },
  { name: 'totalPlan', label: '累計產量', field: 'totalPlan', align: 'right' as const },
  { name: 'planTarget', label: '累計目標', field: 'planTarget', align: 'right' as const },
  { name: 'outputRate', label: '產量率', field: 'outputRate', align: 'right' as const }
]

const tableData = [
  {
    business: '實驗部',
    product: '石碑（訂艙量、裝船量）',
    unit: '噸',
    realInput: 500,
    planInput: 500,
    totalPlan: 7300,
    planTarget: 7500,
    outputRate: '109.59%'
  },
  {
    business: '生產部',
    product: '皮革（原布）',
    unit: '萬平方',
    realInput: 450,
    planInput: 500,
    totalPlan: 6030,
    planTarget: 6000,
    outputRate: '82.92%'
  }
]

const initChart = () => {
  if (!productionChartRef.value) return
  
  chart = echarts.init(productionChartRef.value)
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['實際產量', '計劃產量']
    },
    xAxis: {
      type: 'category',
      data: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '實際產量',
        type: 'line',
        data: [500, 200, 400, 180, 600, 500, 400, 300, 200, 500, 400, 300, 450, 300, 500]
      },
      {
        name: '計劃產量',
        type: 'line',
        data: [400, 300, 350, 250, 500, 450, 350, 250, 300, 450, 350, 400, 400, 350, 450]
      }
    ]
  }
  
  chart.setOption(option)
}

onMounted(() => {
  initChart()
})
</script>

<style scoped>
.chart {
  height: 400px;
}
</style> 