<template>
    <div class="container">
        <div class="le">
            <ul v-for="(data,index) in arr">
                <li class="le-li" v-on:click='active(index)' :class="{activeClass:index==num}">{{data.name}}</li>
                <li>测试git</li>
            </ul>

        </div>

        <div class="ri">
            <ul v-for='data in arr[num].result'>
                <li class="ri-li" v-on:click='jumpPage(data.info)'>{{data.info}}</li>
            </ul>
        </div>

    </div>
</template>

<script>
    //使用axios
    import axios from 'axios'

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                //添加内容,防止报错
                arr: [{ result: [] }],
                num: 0
            }
        },
        //发送数据请求
        beforeCreate() {
            const url = "../../../src/statics/json/data.json"
            axios.get(url).then((res) => {
                //console.log(res.data)
                this.arr = res.data
            })
        },
        methods: {
            active(index) {
                //设置类样式
                this.num = index
            },
            //页面跳转
            jumpPage(keyWords) {
                console.log(keyWords)
                //路由跳转和查询字符串
                this.$router.push({
                    path: "/getRoundDetail",
                    query: { keyWords: keyWords }
                })
            }
        }
    }
</script>

<style scoped="scoped">
    .container {
        margin-top: 0.25rem;
        overflow: hidden;
    }
    
    .ri {
        float: left;
        display: inline-block;
        width: 70%;
        background: #F6F6F6;
    }
    
    .le {
        float: left;
        display: inline-block;
        width: 30%;
    }
    
    .le-li {
        height: 1.8125rem;
        line-height: 1.8125rem;
        color: #000000;
        border: 0.015625rem solid #E8E8E8;
        width: 100%;
        text-align: center;
        font-size: 0.5rem;
    }
    
    .ri-li {
        height: 1.8125rem;
        line-height: 1.8125rem;
        color: #000000;
        border: 0.015625rem solid #E8E8E8;
        width: 100%;
        text-align: center;
        font-size: 0.5rem;
    }
    
    .activeClass {
        border-left: 0.078125rem solid #4EB6FD;
    }
</style>
</style>