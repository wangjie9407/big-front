import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        // 首页
        {
            path: '/',
            redirect: '/home'
        },
        // 首页
        {
            path: '/home',
            component: () => import('@/views/Home/home.vue')
        },
         // 登录 / 注册
        {
            path: '/login',
            component: () => import('@/views/Login/login.vue')
        },

    ]

})