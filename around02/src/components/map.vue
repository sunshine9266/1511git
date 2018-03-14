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
        <!--地图-->
        <div class="amap-wrapper">
            <el-amap vid="amapDemo" :zoom="zoom" :plugin="plugin" :center="center">
                <el-amap-marker :position="marker.position"></el-amap-marker>
                <el-amap-info-window v-for="window in windows" :position="window.position" :content="window.content" :visible="window.visible" :events="window.events"></el-amap-info-window>
            </el-amap>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //地图显示的缩放级别
                zoom: 15,
                //中央地理经纬度
                center: [],
                marker: {
                    position: []
                },
                windows: [
		            {
		              position: [],
		              content: "<div class = 'windowss'>店铺名：</br>电话：</div>",
		              visible: true,
//		              isCustom:true,
					  showShadow:true,	
		              offset:['100','100'],//怎么不管用我擦
		              events: {
		                close() {
		                  console.log('close infowindow');
		                }
		              }
		            }
		          ],
                plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
            }
        },
        created() {
            console.log(this.$route.query.address.split(','))
            let getAddress = this.$route.query.address.split(',');
            for(let i = 0; i < getAddress.length; i++) {
                //设置地图标记点位置
                this.marker.position.push(parseFloat(getAddress[i]))
                //将标记点设置为中心点
                this.center.push(parseFloat(getAddress[i]))
                //设置信息窗体点坐标
//              this.windows[0].position.push(parseFloat(getAddress[i]))
            }
        },
        methods: {
            back() {
                window.history.back()
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
    .amap-wrapper {
        width: 100vw;
        height: 95vh;
    }
    .windowss{
    	background: darkgoldenrod;
    	width: 100px;
    	height: 50px;
    	border: 1px solid red;
    }
</style>