import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import "./main.css"
// import { ref } from '@vue/reactivity'
createApp(App).mount('#app')

// console.log('ref', ref)


console.log("测试环境，环境变量", import.meta.env.VITE_BASE_URL);
console.log("测试环境，环境变量1", import.meta.env.VITE_BASE_URL);
console.log("测试环境，环境变量1", import.meta.env.VITE_BASE_URL);
console.log("测试环境，环境变量1", import.meta.env.local.BASE_URL);
const BASE_URL = import.meta.env.VITE_BASE_URL;
fetch(BASE_URL + '/api/user');

// npm run lint 命令  
// const name = "vue3"
//   warning  'name' is assigned a value but never used  @typescript-eslint/no-unused-vars

// 宿主类型
let w:Window = window;
// w.open1()
const ele:HTMLElement = document.createElement('div')
ele.addEventListener('click', function(e:MouseEvent){

}, false)
