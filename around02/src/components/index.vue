<template>
    <div id="app">

        <top></top>
        <search></search>
        <contain></contain>


    </div>
</template>

<script>
    import top from './index/top.vue'
    import search from './index/search.vue'
    import contain from './index/contain.vue'

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        //局部组件
        components: {
            "top": top,
            "search": search,
            "contain": contain
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