import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/Layout'

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Layout,
        children: [{
            path: '/home',
            name: 'home',
            meta: {header: true, footer: true},
            component: () => import('@/views/home/Home'),
        }]
    },
    {
        path: '/list',
        component: Layout,
        children: [{
            path: '/list',
            name: 'List',
            meta: {header: true, footer: true},
            component: () => import('@/views/list/List'),
        }]
    },
    {
        path: '/detail',
        component: Layout,
        children: [{
            path: '/detail',
            name: 'Detail',
            meta: {header: true, footer: true},
            component: () => import('@/views/detail/Detail'),
        }]
    },
    {
        path: '/timeline',
        component: Layout,
        children: [{
            path: '/timeline',
            name: 'TimeLine',
            meta: {header: true, footer: true},
            component: () => import('@/views/time/TimeLine'),
        }]
    },{
        path: '/about',
        name: 'AboutMe',
        component: () => import('@/views/about/AboutMe'),
    },
    {
        path: '*',
        component: () => import('@/views/404/index'),
    }
]

const createRouter = () => new Router({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
