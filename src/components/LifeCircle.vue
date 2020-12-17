<template>
    <div>
        <p v-if="flag">{{msg}}</p>
        <p v-else>{{test}}</p>
        <button @click="destroy">destroy</button>
    </div>
</template>

<script>
    export default {
        name: "LifeCircle",
        data(){
            return{
                msg: 'LifeCircle',
                test: 'test',
                flag: false
            }
        },
        methods:{
            destroy(){
                //销毁
                this.$destroy();
            }
        },
        beforeCreate() {
            console.log('beforeCreate');
        },
        created() {
            console.log('create');
        },
        beforeMount() {
            console.log('beforeMount');
        },
        mounted() {
            //定时器使用
            this.intervalId = setInterval(()=> {
                this.flag = ! this.flag;
                this.test += '123';
                console.log('12312');
            },1000);
            console.log('mounted');
        },
        beforeUpdate(){
            console.log('beforeUpdate');
        },
        updated(){
            console.log('updated');
        },
        beforeDestroy() {
            console.log('beforeDestroy');
        },
        destroyed() {
            //清除定时器
            clearInterval(this.intervalId);
            console.log('destroyed');
        }
    }
</script>

<style scoped>

</style>
