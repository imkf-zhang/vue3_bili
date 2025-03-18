<template>
  <div>
    <rate-components :value="3"></rate-components>
    <rate-components :value="1+1"></rate-components>
    <todo-list :title="title1" itemKey="tolist1"> </todo-list>
    <todo-list :title="title2" itemKey="tolist2"> </todo-list>
    <todo-list itemKey="tolist3"> </todo-list>
    <div></div>
    <h1></h1>
  </div>
</template>
<script setup>
import TodoList from './components/TodoList.vue'
import RateComponents from './components/RateComponents.vue'
import {ref} from 'vue';
let title1 = ref('kate的代办清单')
let title2 = ref('凯帆的代办清单')
</script>
