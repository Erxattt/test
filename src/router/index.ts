import {createRouter, createWebHistory} from 'vue-router'
// @ts-ignore
import Layout from '@/layout/index.vue'
import {start, close} from "@/utils/nprogress";
import {ElNotification} from "element-plus";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: Layout,
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue')
        }
    ]
})
router.beforeEach((to, from, next) => {
    start()
    setTimeout(() => {
        ElNotification.closeAll()
    }, 15000)
    next()
    close()

})
export default router
