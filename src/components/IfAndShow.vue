<template>
    <div :class="mainBox">
        <p>IfAndShow</p>
        <div v-if="flag">显示v-if</div>
        <button @click="flag = !flag">点我</button>
        <div v-show="flag">显示v-show</div>
    </div>
</template>

<script>
    export default {
        name: "IfAndShow",
        data(){
            return{
                mainBox: 'mainBox',
                flag: false
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .mainBox{
        text-align: center;
        vertical-align: center;
    }
</style>
