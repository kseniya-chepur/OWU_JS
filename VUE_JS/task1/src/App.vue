<template>
  <div id="app">
      <HelloWorld msg="Create your To-Do List here"/>
      <b-form-input 
        type="text" class="form" 
        placeholder="Enter your To-Do"
        v-model="toDo">
      </b-form-input>
      <b-button 
        variant="primary" 
        @click="pushToList" 
        v-if="toDoList.length <= 10">
        Add
      </b-button>
    <ul>
      <li class="menu" 
        v-for="(item, i) in toDoList" :key="i">
          <span style="margin: 0 10px">
            {{item}}
          </span>
          <b-button 
            variant="info" 
            @click="deleteFromList(i)">
            Delete
          </b-button>          
      </li>
    </ul>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
data() {
   return {
     toDo: '',
     toDoList: []     
   }
 },

 methods: {
   pushToList() {
    this.toDoList.push(this.toDo)
    this.toDo = '';
   },
   deleteFromList(i) {
     this.toDoList.splice(i, 1)
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
.form {
  margin: 0 20px; 
  width: 500px; 
  display: inline-block;
}
.menu {
  list-style: none; 
  margin: 10px 0;
  font-style: italic;
  font-weight: bold;
}
</style>
