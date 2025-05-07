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
    <div>{{obj.price}}</div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, defineProps, withDefaults } from 'vue'

interface Propss {
  title?: string
  price?: number
}
// defineProps({
//   title: {
//     type: String,
//     required: true
//   }
// })
withDefaults(defineProps<Propss>(), {
  title: '默认标题',
  price: 100
})

let count = ref<number>(1)
let val = ref('')
let input = ref<HTMLInputElement | null>(null)

interface Course {
  name: string
  price: number
}
let course = ref<Course[]>([{ name: 'z', price: 99 }])
function add(event: Event) {
  console.log(event)
  course.value.push({
    name: `vue ${count.value}`,
    price: count.value
  })

  obj.price++
}

let obj = reactive<Course>({
  name: 'dou',
  price: 99
})

onMounted(() => {
  input.value?.focus()
})
</script>
<style lang="scss">
</style>