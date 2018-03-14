import Vue from 'vue'
import App from './App.vue'

//导入rem布局相关文件
import './statics/flexible/flexible_css.debug.js'
import './statics/flexible/flexible.debug.js'

//使用muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)


//使用mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//使用轮播插件
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)


//使用地图插件
import AMap from 'vue-amap';
Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
  key: '4235b3f62a231e74ddfa1aff974286f2',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

//1. 安装并使用路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//4 导入单文件组件
import getRoundDetail from './components/getRound.vue'
import index from './components/index.vue'
import detail from './components/detail.vue'
import map from './components/map.vue'

//5 配置路由对象
let router = new VueRouter({
    routes:[
        {path:"/",redirect:"index"},
        {path:"/index",component:index},
        {path:"/getRoundDetail",component:getRoundDetail},
        {path:"/detail",component:detail},
        {path:"/map",component:map},
    ]
})


new Vue({
  el: '#app',
  //6
  router:router,
  render: h => h(App)
})
