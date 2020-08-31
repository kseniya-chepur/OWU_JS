<template>
  <div id="app">
    <AddTodo 
    @pushToList="pushToList"
    />
    <TodoList 
    :List="List"
    @DeleteFromList="DeleteFromList"
    />   
  </div>
</template>

<script>

import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App', 
  components: {
    AddTodo,
    TodoList    
  },
  data() {
    return {
      List: ['wake up at 7 a.m.', 'get up in 10 min', 'make a coffee']
    }
  },
  methods: {
    pushToList(e) {
      if(this.List.length <= 10)
      this.List.push(e)  
      },
    DeleteFromList(event) {
      const index = this.List.findIndex(e => e === event);
        this.List.splice(index, 1)
      }
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
