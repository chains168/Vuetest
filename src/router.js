import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass:'link-active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/vip",
      name: "vip",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/vip/vip.vue")
    },
    {
      path: "/shopcart",
      name: "shopcart",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/shopCard/shopcard.vue")
    },
    {
      path: "/search",
      name: "search",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/search/search.vue")
    },
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home
    },
    {
      path: "/newList",
      name: "newList",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ()=>
      import('./components/newList/newList.vue'),
      children:[
     
     ]
    },
    { 
      path:'/newList/newDetail',
      name:'newDetail',
      component:()=>
      import('./components/newList/newDetail.vue')
    },
    { 
      path:'/photos/list/:categoyrID',
      name:'photolist',
      component:()=>
      import('./components/photo/photolist.vue')
    },
    { 
      path:'/photos/photoDetail',
      name:'pholistDetail',
      component:()=>
      import('./components/photo/pholistDetail.vue')
    },
    { 
      path:'/goodsList',
      name:'goodsList',
      component:()=>
      import('./components/goodList/goodList.vue')
    },
    { 
      path:'/goodsList/goodsDetail/:id',
      name:'goodsDetail',
      component:()=>
      import('./components/goodList/goodsDetail.vue')
    },
    
  
   
     
    
   
  

  ]
});
