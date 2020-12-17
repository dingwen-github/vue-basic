<template>
    <div class="todo-footer">
<!--        <label>-->
<!--            <input type="checkbox" v-model="isCheckAll">-->
<!--        </label>-->
<!--        <span>-->
<!--            <span>已完成{{finishedCount}}件</span>  /   总计{{todoList.length}}件-->
<!--        </span>-->
<!--        <button class=" btn btn-warning" @click="todoFinishedClearTodo">清除已完成任务</button>-->

        <!--实名插槽使用-->
        <label>
            <slot name="isCheck"></slot>
        </label>

        <span>
            <slot name="finish"></slot>
        </span>
        <slot name="clear"></slot>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        // props: {
        //     todoList: Array,
        //     todoSelectAll: Function,
        //     todoFinishedClearTodo: Function,
        // },
        // data() {
        //     return {
        //     }
        // },
        // computed: {
        //     finishedCount() {
        //         return this.todoList.reduce((total, todo) => total + (todo.finished ? 1 : 0),0);
        //     },
        //     isCheckAll: {
        //         get(){
        //             return this.finishedCount === this.todoList.length && this.todoList.length > 0;
        //         },
        //         set(value){
        //             this.todoSelectAll(value);
        //         }
        //     }
        // }
    }
</script>

<style scoped>
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>
