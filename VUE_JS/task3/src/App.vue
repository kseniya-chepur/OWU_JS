<template>
  <div id="app">
      <input type="text" v-model="toDo.description">
      <button  
      @click="saveInDB">Add ToDo</button>
      <button 
      @click="getFromDB">Get ToDo</button>
        <ul>
          <li v-for="(item, i) in list" :key="i">
            {{item}}      
          <button @click="deleteFromDB(i, item)">Delete</button>      
          </li>
        </ul>      
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      toDo: {
        description: ''
      },
      list: []
    }
  },
  beforeMount() {
   this.getFromDB();
  },
  methods: {
    saveInDB() {
      this.$http.post('https://vue-http-32ef9.firebaseio.com/list.json', this.toDo)
      .then((res) => {
      console.log(res);      
      })    
    },
    getFromDB() {
      this.$http.get('https://vue-http-32ef9.firebaseio.com/list.json')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        this.list = [];
        for(let key in res) {
          this.list.push({id: key, ...res[key]})
        }    
      })
    },
    deleteFromDB(i, item) {       
      this.list = this.list.filter(value => value != item)
      this.$http.get('https://vue-http-32ef9.firebaseio.com/list.json')
      .then((res)=> {
        return res.json();
      })
      .then((res)=> {        
        this.$http.delete(`https://vue-http-32ef9.firebaseio.com/list/${Object.keys(res)[i]}.json`)
      });
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
ul {
  list-style: none;
}
</style>