// @ts-nocheck
import { createRouter, createWebHistory, createWebHashHistory }  from 'vue-router'
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import About from "./pages/About.vue";

const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/about', component: About}
]

const router = createRouter({
  routes,
  // history: createWebHistory()
  history: createWebHashHistory()
})

export default router