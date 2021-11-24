import {VueRouter} from 'vur-router'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes:{
        { path: '/', redirect: '/home' },
        {path:'home', component: ()=> import('@/views/Home/home.jsx')},
        {path:'login', component: ()=> import('@/views/Login/login.vue')},
    }, 
  })

  export default router