import {createRouter, createWebHistory} from 'vue-router';
// import file you want to route to
import Home from "@/sections/Home.vue";
import Menu from "@/sections/Menu.vue";
import AboutUs from "@/sections/AboutUs.vue";

// create routes
const routes = [
    { path: '/',name:'home',component: Home},
    { path: '/menu',name:'menu',component: Menu},
    { path: '/about',name:'about',component: AboutUs},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router