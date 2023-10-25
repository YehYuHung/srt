<template>
  <nav>
    <ul class="nav nav-pills nav-justified">
      <li role="presentation">
        <router-link :to="{ name: 'index' }">首頁</router-link>
      </li>
      <li role="presentation">
        <router-link :to="{ name: 'report' }">報表</router-link>
      </li>
      <li role="presentation">
        <router-link :to="{ name: 'complexPart' }">測試</router-link>
      </li>
      <li role="presentation">
        <router-link :to="{ name: 'grid' }">檢視</router-link>
      </li>
      <li role="presentation">
        <router-link :to="{ name: 'ajax' }">API</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
</style>

<script setup>
</script>