<template>
    <div>
        <h3>其他指令</h3>
        <div v-html="content"></div>
        <div v-text="content">TALK IS CHEAP SHOW ME THE CODE</div>

        <p v-pre>{{content}}</p>
        <p v-cloak>{{content}}</p>

        <p>***************************************</p>
        <input type="text" placeholder="请输入内容" v-model="content">
        <p v-once>{{content}}</p>

        <p ref="fish">我是一条鱼</p>
        <button @click="log">fish</button>


        <p>自定义指令</p>
        <div v-upper-word="msg"></div>
        <!--数据为空 报错 vue TypeError: Cannot read property 'toUpperCase' of undefined"-->

        <div v-lower-word="msg"></div>
    </div>
</template>

<script>

    export default {
        name: "OtherInstruction",
        data(){
            return{
                content: '<a href="http://www.baidu.com">百度</a>',
                msg: 'TALK IS CHEAP SHOW ME THE CODE'
            }
        },
        methods:{
            log(){
                console.log(`${this.$refs.fish.innerHTML}`)
            }
        },
        directives:{
            'lower-word'(el,binding){
                el.textContent = binding.value.toLowerCase()
            },
        }
    }
</script>

<style scoped>

    [v-cloak]{
        display: none;
    }
</style>
