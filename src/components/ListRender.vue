<template>
    <div :class="mainBox">
        <p>列表渲染</p>
        <h3>遍历数组</h3>
        <ul>
            <li v-for="(stu,index) in students" :key="studentsKeys[index]">{{stu}}</li>
        </ul>
        <h3>遍历对象</h3>
        <ul>
           <li v-for="(item,key) in students[0]" :key="key">
               {{key}}------{{item}}
           </li>
        </ul>
        <table>
           <thead>
           <tr>
               <td>id</td>
               <td>name</td>
               <td>subject</td>
               <td>score</td>
           </tr>
           </thead>
            <tbody>
                <tr v-for="(stu,index) in students" :key="studentsKeys[index]">
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
    import shortId from "shortid"
    export default {
        name: "ListRender",
        data(){
            return{
                mainBox: 'mainBox',
                students: [
                    {name: 'dingwen',subject: 'Java',score: 90},
                    {name: 'maorui',subject: 'Music',score: 88},
                    {name: '张三', subject: 'Python', score: 66},
                    {name: '李四', subject: 'Go', score: 89},
                    {name: '王五', subject: 'Flutter', score: 79},
                    {name: '赵六', subject: 'Dart', score: 59},
                    {name: '李奇', subject: 'Android', score: 88}
                ],
                studentsKeys: [],

            }
        },
        mounted() {
            this.studentsKeys = this.students.map(()=> shortId.generate());
        }
    }
</script>

<style scoped>

    .mainBox{
        text-align: center;
        vertical-align: center;
    }
    .mainBox div,table {
        margin: 0 auto;
    }
    .mainBox  ul {
        /*取消li默认样式*/
        list-style: none;
    }
</style>
