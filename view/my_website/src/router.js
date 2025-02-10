import { createRouter, createWebHistory } from 'vue-router'
import Main from './pages/main.vue' 
import AB_CON from './pages/ab_con.vue'
import funny from './pages/funny.vue'


const routes = [
    {
        path: '/',
        name: 'index', 
        component: Main
    },
    {
        path: '/about',
        name: 'about/contact', 
        component: AB_CON
    },
    {
        path: '/funny',
        name: 'funny', 
        component: funny
    },    
]


const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router