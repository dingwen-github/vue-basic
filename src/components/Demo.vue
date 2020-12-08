<template>
    <div class="app">
        <!--第一部分-->
        <fieldset>
            <legend>指令综合练习</legend>
            <div>
                <span>姓名：</span>
                <input type="text" placeholder="请输入姓名" v-model="newPerson.name">
            </div>
            <div>
                <span>年龄：</span>
                <input type="number" placeholder="请输入年龄" v-model="newPerson.age">
            </div>
            <div>
                <span>性别：</span>
                <select v-model="newPerson.gender">
                    <option value="男">男</option>
                    <option value="女">女</option>
                </select>
            </div>
            <div>
                <span>手机：</span>
                <input type="tel" placeholder="请输入手机号码" v-model="newPerson.phone">
            </div>
            <button @click="createNewPerson()">创建</button>
            <!--第二部分-->
            <table>
                <thead>
                <tr>
                    <td>姓名</td>
                    <td>性别</td>
                    <td>年龄</td>
                    <td>手机</td>
                    <td>操作</td>
                </tr>
                </thead>
                <tbody>
                <!--index必须在后面-->
                <tr v-for="(person,index) in persons" :key="personsKeys[index]">
                    <td>{{person.name}}</td>
                    <td v-text="person.gender"></td>
                    <td v-text="person.age"></td>
                    <td v-text="person.phone"></td>
                    <td @click="deletePerson(index)">删除</td>
                </tr>
                </tbody>
            </table>
        </fieldset>
    </div>
</template>

<script>
    import shortId from 'shortid'

    export default {
        name: "Demo",
        data() {
            return {
                persons: [
                    {name: 'dingwen', age: 23, gender: '男', phone: '18314615694'},
                    {name: 'maorui', age: 21, gender: '女', phone: '18314615694'},
                    {name: '张三', age: 23, gender: '男', phone: '18914615694'},
                    {name: '李四', age: 23, gender: '女', phone: '13714615694'},
                    {name: '王五', age: 23, gender: '男', phone: '13814615694'},
                    {name: '赵六', age: 23, gender: '男', phone: '13614695694'},
                ],
                newPerson: {name: '', age: 0, gender: '女', phone: ''},
                personsKeys: [],
            }
        },
        methods: {
            deletePerson(index) {
                //数组删除
                this.persons.splice(index, 1);
            },
            //添加用户
            createNewPerson() {
                //1.验证
                let {name, age, phone} = this
                if (name == '') {
                    alert('用户名不能为空')
                }
                if (age <= 0 || age >= 200) {
                    alert('年龄不正确')
                }
                if (phone == '') {
                    alert('手机号码不能为空')
                }
                //2.插入数据
                this.persons.unshift(this.newPerson)
                //3.清空数据
                this.newPerson = {name: '', age: 0, gender: '女', phone: ''}
            }
        },
        mounted() {
            this.personsKeys = this.persons.map(() => shortId.generate());
        }
    }
</script>

<style scoped>
    .app {
        margin: 50px auto;
        width: 600px;
    }

    fieldset {
        border: 1px solid orangered;
        margin-bottom: 20px;
    }

    fieldset input {
        width: 200px;
        height: 30px;
        margin: 10px 0;
    }

    table {
        width: 600px;
        border: 2px solid orangered;
        text-align: center;
    }

    thead {
        background-color: orangered;
    }


</style>
