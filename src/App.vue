<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <side-menu />
    </el-aside>
    <el-container>
      <el-header>
        <header-nav />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.el-aside {
  background-color: #001529;
  color: #fff;
}

.el-header {
  background-color: #fff;
  padding: 0;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}

.el-main {
  background-color: #f0f2f5;
  padding: 20px;
}
</style>
