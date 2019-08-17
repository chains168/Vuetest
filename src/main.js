import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'  //导入css

import './mock'
import Axios from 'axios'
Vue.config.productionTip = false;



Vue.use(Mint);
Vue.prototype.$axios=Axios;

// Axios.defaults.baseURL='http://www.sinya.online/api/'   //公共配置

// 引入公共css

import '../static/css/base.css' 
import './assets/iconfont/iconfont.css'

// 引入公共nav

import Navbar from './components/Common/nav';
Vue.component(Navbar.name,Navbar);

// 引入公共header

import header from './components/Common//header'
Vue.component(header.name,header);


// 引入图片评论 

import Comments from './components/Common/comment.vue';
Vue.component(Comments.name,Comments);

// swipe 
import Swipe from './components/Common/swipe';
Vue.component(Swipe.name,Swipe);
// 导入vue-preview
import VuePreview from 'vue-preview'
 
// defalut install
Vue.use(VuePreview);


// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Mint.Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  Mint.Indicator.close();
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
