<template>
    <div id="app">
        <!--头部-->
        <div class="header">
            <mt-header>
                <router-link to="/getRoundDetail" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        </div>
        <!--轮播-->
        <my-swiper :datasarr ="swiperdata"></my-swiper>

        <div class="container">
            <!--内容区域-->
            <div class="main">
                <h2>{{obj.name}}</h2>
                <div style="overflow: hidden;">
                    <p class="star">{{star}}</p>
                    <p class="price">人均 : {{obj.biz_ext.cost}}</p>
                </div>
            </div>
            <!--电话-->
            <div class="phone" v-on:click="jumpToMap()">
                <p>{{obj.address}}</p> <button>phoneMe</button>
            </div>

            <!--代金券-->
            <div class="ticket">
                <p style="font-size: 0.625rem; font-weight: bold;"><span class="quan">券</span>代金券</p>
                <div class="realPrice">
                	dhdhf
                    <!--<span style="color: #41BD9F;">¥{{obj.rich_content.groupbuys[0].goupbuy_price}}</span> 代-->s
                    <!--<span>¥{{obj.rich_content.groupbuys[0].original_price}}</span>-->
                </div>
                <!--<p>{{obj.rich_content.groupbuys[0].title}}</p>-->
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import mySwiper from './detail/swiper.vue'

    import { bus } from '../common/commonvue.js'

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                obj: { biz_ext: { cost: 0 }, rich_content: { groupbuys: [{ groupbuy_price: 0, original_price: 0, title: "" }] } },
                star: "☆☆☆☆☆",
                swiperdata:[]
            }
        },
        created() {

            const url = "http://restapi.amap.com/v3/place/detail"
            //console.log(this.$route.query.id)
            axios.get(url, {
                params: {
                    key: "0e96c9281f28f99c7621464bf20a7e6f",
                    id: this.$route.query.id
                }
            }).then((res) => {
                console.log(res.data.pois[0].photos)
				this.swiperdata = res.data.pois[0].photos;
				console.log(this.swiperdata)
                bus.$emit("swiperData", res.data.pois[0].photos)

                this.obj = res.data.pois[0]
            })
        },
        components: {
            "mySwiper": mySwiper
        },
        methods:{
            jumpToMap(){
//              console.log(this.obj.location)
                //当前位置的地理位置坐标：
                let locations = this.obj.location;
//              let shopName = this.obj.name;
//              let telphone = this.obj.typecode;
                //跳转到地图模块
                this.$router.push({
                    path:"/map",
                    query:{address:locations}
                })
            }
        }
    }
</script>



<style scoped="scoped">
    .mint-header {
        background: rgba(0, 0, 0, 0.5) !important;
    }
    
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10000;
    }
    
    .main {
        margin-top: 0.15625rem;
        padding-left: 0.3125rem;
        border-bottom: 0.03125rem solid #F6F6F6;
    }
    
    .main h2 {
        font-size: 0.625rem;
        font-weight: bold;
    }
    
    .star {
        color: #FFAE62;
        font-size: 0.46875rem;
        float: left;
    }
    
    .price {
        margin-left: 0.15625rem;
    }
    
    .phone{
        height: 1.5625rem;
        line-height: 1.5625rem;
        overflow: hidden;
        margin-left: 0.3125rem;
    }
    .phone p{
        float: left;
    }
    .phone button{
        float: left;
        background: transparent;
        border: 0;
        margin-left: 0.46875rem; 
    }
    .ticket{
        margin-left: 0.3125rem;
    }
    .quan{
        color: white;
        padding: 0.078125rem;
        background: #FF8E00;
        margin-right:0.3125rem ;
    }
    .realPrice{
        margin-top: 0.3125rem;
        margin-bottom: 0.3125rem;
        font-size: 0.46875rem;
    }
</style>
