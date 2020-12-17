<template>
    <div>
        son
        <p>单个变量传递</p>
        {{name}}
        {{age}}
        {{score}}
        <p>对象传递</p>
        {{pricess}}
        <p>数组传递</p>
        {{students}}
        <p>方法传递</p>
        <!--可以向父组件回传参数-->
        <button @click="logFather('son')">logFather</button>
    </div>
</template>

<script>
    export default {
        name: "son",
        components: {
        },
        props: {
            name: String,
            age: Number,
            score: Number,
            pricess: Object,
            students: Array,
            logFather: Function
        }
    }
</script>

<style scoped>

</style>
