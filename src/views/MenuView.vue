<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>數據決策系統</q-toolbar-title>
        <q-btn-dropdown flat>
          <template v-slot:label>
            <div class="row items-center no-wrap">
              <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              <div class="text-subtitle1 q-ml-md">
                admin
              </div>
            </div>
          </template>

          <q-list>
            <q-item clickable v-close-popup @click="onLogout">
              <q-item-section>
                <q-item-label>登出</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>功能選單</q-item-label>

        <q-item clickable v-ripple to="/dashboard" exact>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>

        <q-expansion-item
          icon="analytics"
          label="分析報表"
        >
          <q-list class="q-pl-lg">
            <q-item clickable v-ripple to="/analysis/finance">
              <q-item-section>財務指標分析</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/analysis/manufacture">
              <q-item-section>生產庫存分析</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const leftDrawerOpen = ref(true)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const onLogout = () => {
  router.push('/login')
}
</script> 