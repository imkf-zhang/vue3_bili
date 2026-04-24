// @ts-nocheck
import { createRouter, createWebHistory, createWebHashHistory }  from 'vue-router'
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
// import About from "./pages/About.vue";
import Video from "./pages/Video.vue";

const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/about', component: () => import('./pages/AboutPage.vue')},
  {path: '/video/:id', component: Video}
]

const router = createRouter({
  routes,
  // history: createWebHistory()
  history: createWebHashHistory()
})

export default router