<template>
  <div>
    <h2>{{title}}</h2>
    <h1>hi {{msg}}</h1>
    <!-- <div @click="add"> {{count}}</div> -->
    <input
      type="text"
      v-model="val"
      @keydown.enter="addToDO"
    >
    <button @click="addToDO">add</button>
    <button @click="clearTodo" v-if="totalTodo">clear</button>
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
    全选
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
  props: {
    title: {
      type: String,
      default: '豆子'
    },
    itemKey: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      msg: "vue js",
      count: 1,
      val: "",
      todos: localStorage.getItem(this.itemKey ) ? JSON.parse(localStorage.getItem(this.itemKey )) :  [
        {title: "吃饭", done: true},
        {title: "睡觉", done: true}
        ]
    }
  },
  computed: {
    doneCount() {
      console.log('set时进行了触发1')
      return this.todos.filter(item => item.done).length
    },
    totalTodo() {
      return this.todos.length
    },
    // 妙呀
    allDone: {
      get() {
      console.log("set时进行了触发")
       return this.doneCount === this.todos.length
      },
      set(val) {
        this.todos.forEach(item => item.done = val)
      }
    }
  },
  watch: {
    todos: {
      handler(val) {
        console.log('c changed', val.length)
        localStorage.setItem(this.itemKey , JSON.stringify(val))
      },
      deep: true
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
    },
    clearTodo() {
      // filter 返回一个新的数组，不修改原数组
      this.todos =  this.todos.filter( item => !item.done)
    }
  },
})
</script>
<style>
</style>
