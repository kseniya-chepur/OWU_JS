<template>
    <div>
            <h5>MyProjects</h5>
            <input 
                placeholder="Enter your To-Do"
                v-model="toDo">
            <button 
                @click="pushToList" 
                v-if="toDoList.length < 10">
                Add
        </button>
        <div class="container"> 
        <ul>
            <li class="menu" 
                v-for="(item, i) in toDoList" 
                :key="i">
                <span>
                    {{item}}
                </span>
                <button 
                    @click="deleteFromList(item)">
                    Delete
                </button>          
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyProjects',
    data() {
        return {
            toDo: '',
            toDoList: ['Go to Brazil', 'feed elephants bananas']
        }
    },

    methods: {
        pushToList() {
            this.toDoList.push(this.toDo)
            this.toDo = '';            
        },
        deleteFromList(item) {
            this.toDoList = this.toDoList.filter(value => value != item)
        }
    }
}
</script>

<style scoped>

h5 {
    margin-top: 30px;
}
ul {
    list-style: none;
}
li {
    margin-top: 10px;
}

</style>