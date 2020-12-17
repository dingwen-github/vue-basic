<template>
    <li @mouseenter="mouseenter(true)" @mouseleave="mouseleave(false)" :style="{backgroundColor: bgColor}">
        <label>
            <input type="checkbox" v-model="todo.finished">
            <!--span 行内标签-->
            <span v-text="todo.title"></span>
        </label>
        <button v-show="flag" class="btn-warning" @click="deleteItem">删除</button>
    </li>
</template>

<script>
    import PubSub from 'pubsub-js'
    export default {
        name: "Item",
        props: {
            todo: Object,
            index: Number,
            // props实现
            // todoDelete: Function
        },
        data() {
            return {
                flag: false,
                bgColor: '#fff'
            }
        },
        methods: {
            mouseenter(flag) {
                this.flag = flag;
                this.bgColor = '#ddd';
            },
            mouseleave(flag) {
                this.flag = flag;
                this.bgColor = '#fff';
            },
            deleteItem(){
                if(window.confirm(`您确定删除 ${this.todo.title} 吗？`)){
                    //props实现
                    // this.todoDelete(this.index);
                    //发布订阅实现
                    PubSub.publish('todoDelete',this.index);
                }else{
                    alert('已取消');
                }
            }
        },
    }
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #dddddd;
    }

    li label {
        float: left;
        cursor: pointer;
        width: 520px;
    }

    li label input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li:before {
        content: initial;
    }

    /*指定父元素li最后的一个孩子的样式，在vue中li必须是顶层元素*/
    li:last-child {
        border-bottom: none;
    }
</style>
