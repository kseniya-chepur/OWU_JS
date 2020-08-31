<template>
    <div>
        <ul>
            <li 
                v-for="(item, i) in List" 
                :key="i">
                <TodoItem 
                :item="item"
                @DeleteFromList="DeleteFromList"
                />
            </li>
        </ul>        
    </div>    
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
    name: 'Todolist',
    components: {
        TodoItem
    },
    props: {
        List: {
            type: Array,
            required: true
        }
    } 
    ,
    methods: {
        DeleteFromList(event) {
            this.$emit('DeleteFromList', event)
        }
    } 
}
</script>

<style scoped>
    li {
        list-style-type: none;
    }
</style>