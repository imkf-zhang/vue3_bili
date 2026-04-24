<template>
  <div>
    关于页面
    <a-button @click="handle">点击</a-button>
    {{count}}
  </div>
</template>

<script setup lang="ts">
let count = ref(0)
function handle() {
  count.value++
}
</script>
