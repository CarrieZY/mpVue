import Vue from 'vue'
import App from './App'
import Fly from 'flyio/dist/npm/wx'
import store from './store/store'
//设置Vue的提示功能关闭
Vue.config.productionTip = false
//声明当前组件的类型
App.mpType = 'app' 

//将store放置在Vue的实例为的是每一个实例都可以使用
Vue.prototype.$store=store

let fly = new Fly

Vue.prototype.$fly = fly
//生成应用的实例
const app = new Vue(App)
//挂载整个应用
app.$mount()
