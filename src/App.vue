<template>
    <div id="app">
        <div class="navbar">
            <ul>
                <!-- 切畫router畫面卡住，由於Data資料未Return導致畫面鎖死
                    原因與解決方法 : https://blog.csdn.net/qq_43780761/article/details/126126672
                -->
                <li><router-link :to="{name:'index'}">首頁</router-link></li>
                <li><router-link :to="{name:'report'}">報表</router-link></li>
                <li><router-link :to="{name:'complexPart'}">測試</router-link></li>
                <li><router-link :to="{name:'grid'}">檢視</router-link></li>
                <!--<li><router-link :to="{name:'insert'}">表格</router-link></li>
                <li><router-link :to="{name:'passing'}">傳遞</router-link></li>-->
            </ul>
        </div>
        <div class="container">
            <!-- 實際渲染位置 -->
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    div.navbar > ul > li {
        display: inline;
        margin: 1vw 1vh;
    }
    ul {
        margin: 0;
        padding: 0;
    }
</style>
