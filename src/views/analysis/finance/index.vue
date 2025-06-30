<template>
  <q-page padding>
    <div class="analysis-container">
      <!-- 標題區域 -->
      <div class="text-center q-mb-lg">
        <div class="text-h5 text-primary q-mb-sm">財務六大指標分析圖</div>
        <div class="text-subtitle2 text-grey-7">企業財務健康度及成長分析</div>
      </div>

      <!-- 分類按鈕 -->
      <div class="row justify-center q-mb-lg">
        <q-btn-group>
          <q-btn color="negative" label="整體概觀" />
          <q-btn color="info" label="季比比較" />
          <q-btn color="primary" label="年比比較" />
          <q-btn color="teal" label="趨勢分析" />
        </q-btn-group>
      </div>

      <!-- 圖例說明 -->
      <div class="row justify-center q-mb-lg items-center">
        <div class="row items-center q-mr-md">
          <q-icon name="circle" color="green" size="xs" class="q-mr-xs" />
          <span class="text-caption">高於標準</span>
        </div>
        <div class="row items-center q-mr-md">
          <q-icon name="circle" color="orange" size="xs" class="q-mr-xs" />
          <span class="text-caption">尚可-待觀察</span>
        </div>
        <div class="row items-center">
          <q-icon name="circle" color="red" size="xs" class="q-mr-xs" />
          <span class="text-caption">警戒標準</span>
        </div>
      </div>

      <!-- 財務指標表格 -->
      <q-card flat bordered>
        <q-table
          :rows="financialData"
          :columns="columns"
          row-key="name"
          flat
          :pagination="{ rowsPerPage: 0 }"
          hide-bottom
          class="financial-table"
        >
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th class="text-left">指標類別</q-th>
              <q-th class="text-left">財務指標</q-th>
              <q-th class="text-center">92年度</q-th>
              <q-th class="text-center">93年度</q-th>
              <q-th class="text-center">94年度</q-th>
              <q-th class="text-center">趨勢</q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td v-if="props.row.isCategory" :rowspan="props.row.rowspan" class="bg-grey-2">
                {{ props.row.category }}
              </q-td>
              <q-td>{{ props.row.name }}</q-td>
              <q-td class="text-center">{{ props.row.y92 }}</q-td>
              <q-td class="text-center">{{ props.row.y93 }}</q-td>
              <q-td class="text-center" :class="{ 'text-red': props.row.warning }">{{ props.row.y94 }}</q-td>
              <q-td class="text-center">
                <q-icon
                  :name="props.row.trend === 'up' ? 'arrow_upward' : 'arrow_downward'"
                  :color="props.row.trend === 'up' ? 'positive' : 'negative'"
                  size="sm"
                />
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card>

      <!-- 財務分析摘要 -->
      <div class="row q-mt-xl q-col-gutter-md">
        <div class="col-4">
          <q-card flat bordered class="summary-card">
            <q-card-section>
              <div class="text-subtitle2 text-primary">營運績效指標</div>
              <div class="text-caption q-mt-sm">
                包含獲利能力、經營能力、成長性及現金流量等指標等項目分析，顯示公司整體財務經營狀態。
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-4">
          <q-card flat bordered class="summary-card">
            <q-card-section>
              <div class="text-subtitle2 text-primary">償債能力指標</div>
              <div class="text-caption q-mt-sm">
                觀察企業短期及長期償還債務能力，評估企業償債能力，避免產生財務危機。
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-4">
          <q-card flat bordered class="summary-card">
            <q-card-section>
              <div class="text-subtitle2 text-primary">成長性指標</div>
              <div class="text-caption q-mt-sm">
                分析企業營運規模與獲利能力成長趨勢，分析營運擴充、投資報酬率等財務指標。
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = [
  { name: 'category', align: 'left', label: '指標類別', field: 'category' },
  { name: 'name', align: 'left', label: '財務指標', field: 'name' },
  { name: 'y92', align: 'center', label: '92年度', field: 'y92' },
  { name: 'y93', align: 'center', label: '93年度', field: 'y93' },
  { name: 'y94', align: 'center', label: '94年度', field: 'y94' },
  { name: 'trend', align: 'center', label: '趨勢', field: 'trend' }
]

const financialData = [
  {
    category: '獲利能力',
    name: '股東權益益報酬率(%)',
    y92: '12.5',
    y93: '14.2',
    y94: '15.8',
    trend: 'up',
    isCategory: true,
    rowspan: 3
  },
  {
    name: '資產報酬率(%)',
    y92: '7.2',
    y93: '8.1',
    y94: '8.7',
    trend: 'up'
  },
  {
    name: '總資產週轉率(次)',
    y92: '1.23',
    y93: '1.28',
    y94: '1.25',
    trend: 'stable',
    warning: true
  },
  {
    category: '營運效率',
    name: '應收帳款週轉率(次)',
    y92: '9.14',
    y93: '9.34',
    y94: '8.08',
    trend: 'down',
    warning: true,
    isCategory: true,
    rowspan: 2
  },
  {
    name: '應收帳款收現日數',
    y92: '39.93',
    y93: '39.07',
    y94: '45.17',
    trend: 'up',
    warning: true
  },
  {
    category: '償債能力',
    name: '流動比率',
    y92: '1.8',
    y93: '2.0',
    y94: '2.1',
    trend: 'up',
    isCategory: true,
    rowspan: 2
  },
  {
    name: '負債比率(%)',
    y92: '42.3',
    y93: '38.9',
    y94: '35.2',
    trend: 'up'
  },
  {
    category: '成長性',
    name: '營收成長率(%)',
    y92: '8.5',
    y93: '11.2',
    y94: '12.5',
    trend: 'up',
    isCategory: true,
    rowspan: 2
  },
  {
    name: '盈餘成長率(%)',
    y92: '15.3',
    y93: '18.7',
    y94: '22.1',
    trend: 'up'
  },
  {
    category: '市場價值',
    name: '本益比(倍)',
    y92: '20.1',
    y93: '19.2',
    y94: '18.3',
    trend: 'down',
    warning: true,
    isCategory: true,
    rowspan: 2
  },
  {
    name: '股價淨值比(倍)',
    y92: '1.85',
    y93: '2.12',
    y94: '1.95',
    trend: 'stable',
    warning: true
  },
  {
    category: '現金流量',
    name: '營運現金流(億元)',
    y92: '2.1',
    y93: '2.5',
    y94: '2.8',
    trend: 'up',
    isCategory: true,
    rowspan: 2
  },
  {
    name: '現金流量比率(%)',
    y92: '18.5',
    y93: '22.3',
    y94: '25.7',
    trend: 'up'
  }
]
</script>

<style scoped>
.analysis-container {
  max-width: 1200px;
  margin: 0 auto;
}

:deep(.financial-table) {
  border: 1px solid var(--q-primary);
}

:deep(.financial-table .q-table__top),
:deep(.financial-table .q-table__bottom),
:deep(.financial-table thead tr:first-child th) {
  background-color: #fff;
}

:deep(.financial-table thead tr th) {
  border: 1px solid var(--q-primary);
  color: #000;
  font-weight: 500;
  background-color: #e3f2fd;
}

:deep(.financial-table tbody tr td) {
  border: 1px solid var(--q-primary);
}

.summary-card {
  height: 100%;
  transition: all 0.3s ease;
}

.summary-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}
</style> 