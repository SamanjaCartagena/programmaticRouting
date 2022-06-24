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
            path:'/destination/:id/:slug',
            name:'destination.show',
            component:() => import('../views/DestinationShow.vue')
        }
    ],
    linkActiveClass:'vue-school-active-link'
})

export default router