import VueRouter from 'vue-router'

export default VueRouter.createRouter({
    routes:[
        {
            path:'/',
            directives:'/demo'
        },
        {
            path:'/demo',
            component: () => import('@/views/layout.vue'),
            children:[
                {
                    path: '/v3-button',
                    component: () => ('@/components/demo/v3-button.vue'),
                    meta:{
                        title:'自定义button组件'
                    }
                }
            ]
        }
    ],
    history: VueRouter.createWebHashHistory(),
})