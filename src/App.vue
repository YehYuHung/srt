<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld/> 
        <h1>{{message}}</h1> 
        <ReportView msg="Yoloshiku" />
        <ComplexPart/> -->
        <AsGridView />
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue';
    //import ReportView from './components/ReportView.vue';
    //import ComplexPart from './components/complexPart.vue';
    import AsGridView from './components/AsGridView.vue';

    export default {
        name: 'App',
        components: {
            //HelloWorld,
            //ReportView,
            //ComplexPart,
            AsGridView
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
