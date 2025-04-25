<template>

  <div>
    {{count}}
    <input
      ref="input"
      type="text"
      v-model="val"
    >
    <button @click="add">click</button>
    <div
      v-for="(item,index) in course"
      :key="index"
    >
      {{item.name}}
      {{item.price}}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, computed } from 'vue'

let count = ref<number>(1)
let val = ref('')
let input = ref<HTMLInputElement | null>(null)

interface Course {
  name: string
  price: number
}
let course = ref<Course[]>([{ name: 'z', price: 99 }])
function add() {
  course.value.push({
    name: `vue ${count.value}`,
    price: count.value
  })
}
onMounted(() => {
  input.value?.focus()
})
</script>
<style lang="scss">
</style>