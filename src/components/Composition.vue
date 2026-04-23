<template>
  <div>
    composition api {{count}}

    X: {{x}}
    y: {{y}}
    <button @click="add">add</button>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {ref} from 'vue'
import { useMouse } from "./mouse.ts";
export default defineComponent({
  
  setup() {
    let count = ref(1)
    function add() {
      count.value++
    }
    let {x, y} = useMouse()
    return {count, add, x, y}
  }
})
</script>

<style>

</style>