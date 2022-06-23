import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage.vue'


const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:'/',
            name:'Home',
            component:HomePage
        },
        {
            path:'/about',
            name:'About',
            component:() => import('../views/AboutPage.vue')
        },
        {
            path:'/brazil',
            name:'Brazil',
            component:() => import('../views/BrazilPage.vue')
        },
        {
            path:'/panama',
            name:'PanamaPage',
            component:() => import('../views/PanamaPage.vue')
        },
        {
            path:'/jamaica',
            name:'Jamaica',
            component:() => import('../views/JamaicaPage.vue')
        },
        {
            path:'/hawaii',
            name:'Hawaii',
            component:() => import('../views/HawaiiPage.vue')
        }
    ]
})

export default router