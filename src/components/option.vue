<template>
  <div>
    option  components
  </div>
</template>
<script>
// 可维护性比较差
import {defineComponent} from 'vue'
import nameMixin from './Name'
export default defineComponent({
  mixins: [nameMixin],
  mounted() {
    console.log(this.name)
  },
  data() {
    return {

    }
  },
  methods: {
    
  },
  computed: {
    
  }
})
</script>
<style lang='less' scoped>
</style>