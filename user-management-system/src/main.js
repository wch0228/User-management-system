import Vue from 'vue'
import App from './App.vue'

// 下载router之后引入
import VueRouter from 'vue-router'

// 下载axios VueAxios之后引入
import axios from 'axios'
import VueAxios from 'vue-axios'

//引入组件
import HomePage from './components/HomePage'
import About from './components/About'
import Add from './components/Add'
import Details from './components/Details'
import Edit from './components/Edit'


// 使用路由
Vue.use(VueRouter);
// 使用VueAxos axios
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

// 配置路由
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: HomePage },
    { path: "/About", component: About },
    { path: "/Add", component: Add },
    { path: "/item/:id", component: Details },
    { path: "/edit/:id", component: Edit }
  ]
})

new Vue({
  render: h => h(App),
  // 使用路由
  router
}).$mount('#app')
