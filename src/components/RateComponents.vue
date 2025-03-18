<template>
  <div>
    <slot></slot>
    <span @mousemove="tryUpdate">{{score}}</span>
  </div>
</template>
<script>
import { defineComponent} from 'vue'
// ★☆
export default defineComponent({
  // 1、组件内部的渲染和逻辑
  // 2、组件的输入
  // 3、组件的输出
  // 4、组件的扩展
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  emits: ['update'],
  computed: {
    score() {
      return '★★★★★☆☆☆☆☆'.slice(5-this.value, 10-this.value)
    }
  },
  methods: {
    tryUpdate() {
      this.$emit("update", 'hello')
      console.log("Dayin")
    }
  }
})
</script>
