<template>
    <div>
        <item v-for="(todo,index) in todoList" :todo="todo" :index="index" :key="todoListKeys[index]" :todo-delete="todoDelete"/>
    </div>
</template>

<script>
    import Item from "./Item";
    import shortId from 'shortid'
    export default {
        name: "List",
        components: {
            Item
        },
        props: {
            todoList: Array,
            todoDelete: Function
        },
        data(){
            return{
                todoListKeys: [],
            }
        },
        mounted(){
            this.todoListKeys = this.todoList.map(() => shortId.generate());
        },
    }
</script>

<style scoped>

</style>
