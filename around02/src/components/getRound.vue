<template>
    <div id="app">
        <div class="header">
            <mt-header title="多个按钮">
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button slot="right">离我最近</mt-button>
            </mt-header>
        </div>

        <!--内容部分-->
        <div class="container">
            <ul>
                <!--根据每一条的id跳转到指定的详情页-->
                <li v-for='data in arr' v-on:click="jumpToDetail(data.id)">
                    <p class="p1">{{data.name}}</p>
                    <p class="p2">{{data.address}}</p>
                    <p class="p3">{{data.distance}}米</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                arr: []
            }
        },
        //发送请求,获取数据
        created() {

            //获取查询字符串的内容
            let keyWords = this.$route.query.keyWords

            //查询的url
            const url = 'http://restapi.amap.com/v3/place/around'
            axios.get(url, {
                params: {
                    key: "0e96c9281f28f99c7621464bf20a7e6f",
                    //location: this.longitude + ',' + this.latitude,
                    location: 116.29296800434234 + ',' + 40.03927092970674,
                    offset: 10,
                    //page:this.page,
                    page: 1,
                    sradius: 100000,
                    keywords: keyWords

                }
            }).then((res) => {
                  console.log(res.data.pois)

                this.arr = res.data.pois
            })
        },
        methods:{
            jumpToDetail(id){
                console.log(id)
                //设置路由跳转
                this.$router.push({
                    path:"/detail",
                    query:{id:id}
                })
            }
        }
    }
</script>


<style scoped="scoped">
    .header{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
    }
    .mint-header {
        height: 1.75rem;
        background: #E78113;
    }
    ul{
        margin-top: 1.75rem;
    }
    
    li {
        height: 2.1875rem;
        border-bottom: 1px solid;
        position: relative;
    }
    
    .p1{
        padding-top: 0.3125rem;
        padding-left: 0.3125rem;
        color: #000000;
        font-size: 0.45rem;
        font-weight: bold;
    }
    .p2{
        padding-left: 0.3125rem;
    }
    .p3{
        position: absolute;
        bottom: 0.15625rem;
        right: 0.625rem;
    }
</style>