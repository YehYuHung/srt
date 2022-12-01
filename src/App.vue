<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/> 
        <h1>{{message}}</h1> -->
        <ReportView msg="Yoloshiku" />
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue';
    import ReportView from './components/ReportView.vue';

    export default {
        name: 'App',
        components: {
            //HelloWorld,
            ReportView
        },
        data() {
            return {
                message: 'Welcome to Vue!'
            }
        }
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
</style>
