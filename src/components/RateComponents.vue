<template>
  <div>
    <span>{{score}}</span>
  </div>
</template>
<script>
import { defineComponent} from 'vue'
// ★☆
export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    score() {
      return '★★★★★☆☆☆☆☆'.slice(5-this.value, 10-this.value)
    }
  }
})
</script>
