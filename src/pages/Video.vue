<template>
  <div>
    视频页 这个是路由传参 {{videoId}}
  </div>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
let router = useRouter()
console.log('路由实例', router)
let route = useRoute()
console.log(route)

const { id: videoId } = route.params
</script>