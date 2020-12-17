<template>
    <div class="todo-header">
        <input v-model="title" type="text" placeholder="请输入任务清单，按回车键确认" @keyup.enter="todoItem">
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            //props实现
            // todoAdd: Function
        },
        data() {
            return {
                title: ''
            }
        },
        methods: {
            todoItem() {
                //1.判断是否为空
                const title = this.title.trim();
                if (!title) {
                    alert('输入的任务不能为空');
                    return
                }

                //2.生成一个todo对象
                let todo = {title, finished: false};

                //3.调用父组件方法进行添加
                //props实现
                // this.todoAdd(todo);

                //自定义事件实现
                this.$emit('todoAdd',todo);

                //4.清除输入框
                this.title = '';
            }
        }
    }
</script>

<style scoped>
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #cccccc;
        border-radius: 4px;
        padding: 4px 7px;
        outline: none;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(255, 0, 0, 0.8);
        box-shadow: inset 0px 1px 1px rgba(255, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
    }
</style>
