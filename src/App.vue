<template>
    <div id="app" class="container">
        <div class="navbar">
            <ul>
                <!-- 切畫router畫面卡住，由於Data資料未Return導致畫面鎖死
                    原因與解決方法 : https://blog.csdn.net/qq_43780761/article/details/126126672
                -->
                <li><router-link to="/">首頁</router-link></li>
                <li><router-link to="/ReportView/">報表</router-link></li>
                <li><router-link to="/complexPart/">測試</router-link></li>
                <li><router-link to="/AsGridView/">檢視</router-link></li>
                <li><router-link to="/InsertView/">表格</router-link></li>
            </ul>
            <!-- 實際渲染位置 -->
            <router-view />
        </div>
        <!--<img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld/>
        <h1>{{message}}</h1>
        <ReportView msg="Yoloshiku" />
        <ComplexPart/>
        <AsGridView />
        <InsertView /> -->
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
        margin : 1vw 1vh;
    }
</style>
