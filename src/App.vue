<template>
  <div class="container">
    <!-- 切畫router畫面卡住，由於Data資料未Return導致畫面鎖死
        原因與解決方法 : https://blog.csdn.net/qq_43780761/article/details/126126672
      -->
    <Navbar />
    <!-- 實際渲染位置 -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>

<script setup>
import Navbar from "@/components/NavbarComponent.vue";
</script>