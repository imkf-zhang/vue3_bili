<template>
  
  <div>
    {{count}}
    <button @click="add">click</button>
   <div v-for="(item,index) in course" :key="index">
  {{item.name}}
  {{item.price}}
  </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';

let count = ref<number>(1)

interface Course {
  name: string,
  price: number
}
let course = ref<Course[]>([{name: 'z', price: 99}])
function add() {
  course.value.push({
    name: `vue ${count.value}`,
    price: count.value
  })
  
}
</script>
<style lang="scss">
</style>