<template>
  <div>
    <h1>hi {{msg}}</h1>
    <!-- <div @click="add"> {{count}}</div> -->
    <input
      type="text"
      v-model="val"
    >
    <button @click="addToDO">add</button>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.title"
      >
        <input
          type="checkbox"
          v-model="todo.done"
        >
        <span>{{todo.title}}</span>
      </li>
    </ul>
    <div>{{doneCount+ '/' + totalTodo}}</div>
    <input
      type="checkbox"
      v-model="allDone"
    >
    <!-- <div @click="addToDO">addToDO</div> -->
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      msg: "vue js",
      count: 1,
      val: "",
      todos: [
        {title: "吃饭", done: true},
        {title: "睡觉", done: true}
        ]
    }
  },
  computed: {
    doneCount() {
      return this.todos.filter(item => item.done).length
    },
    totalTodo() {
      return this.todos.length
    },
    allDone: {
      get() {
       return this.doneCount === this.todos.length
      },
      set(val) {
        this.todos.forEach(item => item.done = val)
      }
    }
  },
  methods: {
    add () {
      this.count++
    },
    addToDO() {
      if(!this.val) {
        alert('必须填内容')
        return
      }
      this.todos.push({title:this.val,done:false})
      this.val = ""
    }
  },
})
</script>
<style>
</style>
