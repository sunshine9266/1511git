<template>
    <div id="app">
        <router-view></router-view>
        <div style="height: 0.875rem;"></div>
        <div class="bottom">
            <bottom></bottom>
        </div>
    </div>
</template>

<script>
    import bottom from './components/index/bottom.vue'
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        //局部组件
        components: {
            "bottom": bottom
        }
    }
</script>

<style>
    .bottom {
        position: fixed;
        bottom: 0;
        display: block;
        width: 100%;
        text-align: center;
    }
</style>