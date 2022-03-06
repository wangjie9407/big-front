export default [
    {
        path:'/my-icon',
        component: () => import('@/views/my-icon-demo.vue'),
        meta:{
            title: 'My-Icon展示Demo'
        }
    },
    {
        path:'/my-layout',
        component: () => import('@/views/my-layout-demo.vue'),
        meta:{
            title: 'MyLayout展示Demo'
        }
    },
    {
        path:'/my-choose-icon',
        component: () => import('@/views/my-choose-icon-demo.vue'),
        meta:{
            title: 'chooseIcon展示Demo'
        }
    },
    {
        path:'/my-choose-area-demo',
        component: () => import('@/views/my-choose-area.vue'),
        meta:{
            title: 'chooseArea展示Demo'
        }
    },
    {
        path:'/my-trend-demo',
        component: () => import('@/views/my-trend-demo.vue'),
        meta:{
            title: 'my-trend展示Demo'
        }
    },
    {
        path:'/my-notification-demo',
        component: () => import('@/views/notification-demo.vue'),
        meta:{
            title: 'my-notification展示Demo'
        }
    }
]