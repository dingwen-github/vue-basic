<template>
    <div>
        father
        <!--此处必须v-bind绑定，否则传递的都是字符串-->
        <son :name="name" :age="age" :score="100" :pricess="pricess" :students="students" :log-father="logFather"/>
    </div>
</template>

<script>
    import Son from "./Son";
    export default {
        name: "father",
        components: {
            Son
        },
        data (){
            return{
                name: 'dingwen',
                age: 23,
                score: 9.9,
                pricess: {
                    name: 'maorui',
                    age: 21
                },
                students: [
                    {name: '张三',age: 66},
                    {name: '李四',age: 88},
                    {name: '王五',age: 78},
                ]
            }
        },
        methods: {
            logFather(name){
                console.log(`father:${name}`);
            }
        },
    }
</script>

<style scoped>

</style>
