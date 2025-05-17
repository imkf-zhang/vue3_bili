<template>
   <div>
    选项式api {{ count}}
    <button @click="add">添加btn</button>
    鼠标移动的坐标位置
    <h1>{{x}}, {{y}}</h1>
   </div>
</template>
<script>
import { defineComponent,ref} from 'vue'
import { useMouse } from './mouse';
export default defineComponent({
  setup() {
    const count = ref(1);
    function add() {
      count.value++
    }

    const {x, y} = useMouse()
    return {
      count,
      add,
      x,
      y
    }
  }
})
</script>
<style lang='scss' scoped>
</style>