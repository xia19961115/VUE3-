import { createRouter, createWebHashHistory } from 'vue-router'
const routes=[
    {
        path:'/',
        redirect: '/index/news'
    },
    {
        path:'/index',
        name:'Index',
        component:()=>import("../view/index.vue"),
        children:[
            {
                path:'news',
                name:'News',
                component:()=>import("../view/news.vue")
            }
        ]
    },
    {
        path:'/about',
        name:'About',
        component:()=>import("../view/about.vue")
    }
]

const router =createRouter({
    history:createWebHashHistory(),
    routes
})
router.beforeEach((to,from,next)=>{
next()
})

export default router