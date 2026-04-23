<template>
  <div>
    <img
      :src="logo"
      alt=""
    >
    <div v-html="logo1"></div>
    <!-- zkf
    <rate-components :value="3" @update="update">
    书的评分
    </rate-components>
    <rate-components :value="1+1">
    课程评分
    </rate-components>
    <todo-list :title="title1" itemKey="tolist1"> </todo-list>
    <todo-list :title="title2" itemKey="tolist2"> </todo-list>
    <todo-list itemKey="tolist3"> </todo-list>
    <div></div>
    <h1>一帆风顺</h1>

    <h2>TS学习</h2>
    <learn-ts :title="'好好学习'"></learn-ts>
    <my-composition></my-composition> -->

    <option1></option1>
    <Composition></Composition>
    <h1>我的项目</h1>

    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/video/video1">video</router-link>
      <router-link to="/video/video2">video</router-link>
      张卡饭
    </div>
    <router-view></router-view>
    <div>footer</div>
  </div>
</template>
<script setup lang="ts">
import TodoList from './components/TodoList.vue'
import RateComponents from './components/RateComponents.vue'
import LearnTs from './components/LearnTs.vue'
import MyComposition from './components/MyComposition.vue'
import logo from './assets/logo.svg'
import logo1 from './assets/logo.svg?raw'
import option1 from './components/option.vue'
import Composition from './components/Composition.vue'
// console.log('logo', logo)
// console.log('logo1', logo1)
// import { ref } from 'vue'
// let title1 = ref('kate的代办清单')
// let title2 = ref('凯帆的代办清单')
// function update(res) {
//   console.log(res)
// }
</script>
<style lang="scss">
$primary-color: red;
$font-size: 20px;
h1 {
  color: $primary-color;
  font-size: $font-size;
}
</style>
