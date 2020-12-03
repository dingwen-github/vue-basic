<template>
    <div :class="mainBox">
        <button @click="order(0)">默认</button>
        <button @click="order(1)">升序↑</button>
        <button @click="order(2)">降序↑</button>
        <input type="text" placeholder="请输入姓名：" v-model="name">
        <table>
            <thead>
            <tr>
                <td>编号</td>
                <td>姓名</td>
                <td>科目</td>
                <td>成绩</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(stu,index) in filterStudents" :key="studentsKeys[index]">
                <td>{{studentsKeys[index]}}</td>
                <td>{{stu.name}}</td>
                <td>{{stu.subject}}</td>
                <td>{{stu.score}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import shortId from 'shortid'

    export default {
        name: "ListRenderTwo",
        data() {
            return {
                mainBox: 'mainBox',
                name: '',
                students: [
                    {name: 'dingwen', subject: 'Java', score: 90},
                    {name: 'maorui', subject: 'Music', score: 88},
                    {name: '张三', subject: 'Python', score: 66},
                    {name: '李四', subject: 'Go', score: 89},
                    {name: '王五', subject: 'Flutter', score: 79},
                    {name: '赵六', subject: 'Dart', score: 59},
                    {name: '李奇', subject: 'Android', score: 88}
                ],
                studentsKeys: [],
                orderType: 0,
            }
        },
        computed: {
            filterStudents() {
                //1.获取数据
                let {name, students, orderType} = this
                //2.取出数组中的数据
                let arr = [...students]
                //3.搜索
                name = name.toString().trim()
                if(name){
                    arr = students.filter((stu) => stu.name.indexOf(name) > -1)
                }
                //4.排序
                if(orderType){
                    arr = students.sort((s1,s2) =>{
                        switch (orderType) {
                            case 1:
                                //升序
                                return s1.score - s2.score
                            case 2:
                                //降序
                                return s2.score -s1.score

                        }
                    })
                }
                return arr
            }

        },
        methods: {
            order(orderType) {
                this.orderType = orderType
            }
        },
        mounted() {
            this.studentsKeys = this.students.map(() => shortId.generate());
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .mainBox {
        text-align: center;
        vertical-align: center;
        border: 1px solid darkcyan;
        width: 600px;
    }

    .mainBox table, .mainBox {
        margin: 0 auto;
    }

    .mainBox table td {
        border: 1px solid green;
    }

    .mainBox table {
        /*
        border-collapse使临近的边线合并成一条边线，也就避免了cellspacing中边线重合造成边线加粗的问题。
        所以在这里不提倡使用html属性设置表格边框时将cellspacing设置为0，，如果你希望他等于0，
        更提倡使用css样式属性的方法去设置表格的边框，并使用border-collapse: collapse去合并边线，而不是
        将cellspacing设置为0，造成重合边线加粗的问题*/
        /*表格全边框*/
        border-collapse: collapse;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .mainBox button {
        margin-right: 10px;
    }

</style>
