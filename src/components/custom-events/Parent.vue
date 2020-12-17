<template>
    <!--组件通信：自定义事件-->
    <div>
        <p ref="p">Parent</p>
        <!--childDeleteP 子组件定义事件-->
        <child @childDeleteP="parentDeleteP"/>
    </div>
</template>

<script>
    import Child from "./Child";
    export default {
        name: "Parent",
        components: {
            Child
        },
        methods: {
            parentDeleteP(){
               this.$refs.p.remove();
            }
        }
    }
</script>

<style scoped>
    p{
        width: 600px;
        height: 600px;
        background-color: darkcyan;
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
