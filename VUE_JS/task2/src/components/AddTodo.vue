<template>
    <div>        
        <input 
        type="text" 
        placeholder="Enter your To-Do"
        v-model="toDo"
        >
        <button @click="Add">Add</button>      
    </div>
</template>

<script>
export default {
    name: 'AddTodo',
    data() {
        return {
            toDo: ''            
        }
    },

    methods: {
        Add() {
            this.$emit('pushToList', this.toDo)
            this.toDo = '';
        }
    }
}

</script>


