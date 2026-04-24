// @ts-nocheck
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import "./main.css"
// import { ref } from '@vue/reactivity'
import router from './router'
import 'ant-design-vue/dist/reset.css';
const app = createApp(App)
app.use(router)
app.mount('#app')
// createApp(App).mount('#app')

// console.log('ref', ref)


console.log("测试环境，环境变量", import.meta.env.VITE_NAME);
const BASE_URL = import.meta.env.VITE_BASE_URL
fetch(`${BASE_URL}/api/user`);
// console.log("测试环境，环境变量1", import.meta.env.VITE_BASE_URL);
// console.log("测试环境，环境变量1", import.meta.env.VITE_BASE_URL);
// console.log("测试环境，环境变量1", import.meta.env.local.BASE_URL);
// const BASE_URL = import.meta.env.VITE_BASE_URL;
// fetch(BASE_URL + '/api/user');

// npm run lint 命令  
// const name = "vue3"
//   warning  'name' is assigned a value but never used  @typescript-eslint/no-unused-vars

// 宿主类型
// const w:Window = window;
// w.open1()
// const ele:HTMLElement = document.createElement('div')
// ele.addEventListener('click', function(e:MouseEvent){
//   console.log('e', e);
// }, false)
