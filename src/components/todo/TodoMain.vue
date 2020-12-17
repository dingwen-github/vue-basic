<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!--props实现-->
            <!--            <Header :todoAdd="todoAdd"/>-->
            <!--自定义事件实现-->
            <Header ref="header"/>
            <list :todoList="todoList" :todo-delete="todoDelete"/>
            <!--            <Footer :todoList="todoList" :todoSelectAll="todoSelectAll" :todoFinishedClearTodo="todoFinishedClearTodo"/>-->

            <!--实名插槽使用-->
            <Footer>
                <input slot="isCheck" type="checkbox" v-model="isCheckAll">
                <span slot="finish">已完成{{finishedCount}}件  /   总计{{todoList.length}}件</span>
                <button slot="clear" class=" btn btn-warning" @click="todoFinishedClearTodo">清除已完成任务</button>
            </Footer>
        </div>
    </div>
</template>

<script>
    import localStorageUtil from "../../utils/localStorageUtil";
    import Header from "./components/Header";
    import List from "./components/List";
    import Footer from "./components/Footer";
    import PubSub from 'pubsub-js'

    export default {
        name: "TodoMain",
        components: {
            Header,
            List,
            Footer,
        },
        data() {
            return {
                todoList: localStorageUtil.readTodoList(),
            }
        },
        methods: {
            /*弱类型*/
            todoDelete(index) {
                this.todoList.splice(index, 1);
            },
            todoAdd(todo) {
                this.todoList.unshift(todo);
            },
            //是否选中所有任务
            todoSelectAll(isCheck) {
                this.todoList.forEach((todo) => todo.finished = isCheck);
            },
            //清除已完成任务
            todoFinishedClearTodo() {
                this.todoList = this.todoList.filter((todo) => !todo.finished);//为true表示过滤掉
            }
        },
        watch: {
            todoList: {
                //todoList发生改变的时候触发的回调函数
                handler: localStorageUtil.saveTodoList,
                //开启深度监视，todoList中每一个todo的改变
                deep: true,
                //初始化进行,不管有没有都执行一次
                immediate: true,
                get() {
                },
                set() {
                }
            }
        },
        mounted() {
            //监听自定义事件处理
            this.$refs.header.$on('todoAdd', this.todoAdd);
            //订阅消息
            PubSub.subscribe('todoDelete', (msg, token) => {
                console.log(msg, token);
                this.todoDelete(token);
            });
        },
        computed: {
            finishedCount() {
                return this.todoList.reduce((total, todo) => total + (todo.finished ? 1 : 0), 0);
            },
            isCheckAll: {
                get() {
                    return this.finishedCount === this.todoList.length && this.todoList.length > 0;
                },
                set(value) {
                    this.todoSelectAll(value);
                }
            }
        }
    }
</script>

<style scoped>
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #dddddd;
        border-radius: 5px;
    }
</style>
