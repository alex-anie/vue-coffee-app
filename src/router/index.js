import { createWebHistory, createRouter } from "vue-router";

import Home from "@/pages/Home.vue";
import Coffee from "@/pages/Coffee.vue";
import About from "@/pages/About.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path : '/', 
            name: 'home', 
            component: Home
        },
        {
            path : '/coffee', 
            name: 'coffee', 
            component: Coffee
        },
        {
            path : '/about', 
            name: 'about', 
            component: About
        }
    ]
})

export default router;