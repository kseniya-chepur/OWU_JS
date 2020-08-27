<template>
    <div>
        <span>{{item}}</span>
        <button @click="Delete">Delete</button>
    </div>
</template>

<script>

export default {
    name: 'TodoItem',
    props: {
        item: {
            type: String,
            required: true
        }
    },

    methods: {
        Delete() {            
            this.$emit('DeleteFromList', this.item)
        }
    }    
}
</script>

<style scoped>
    span {
        margin: 20px;
    }
</style>