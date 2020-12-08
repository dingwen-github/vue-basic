<template>
    <div>
        <button @click="clickOne('args',$event)">点</button>
        <h3>事件修饰符</h3>
        <a href="http://www.baidu.com" @click.prevent="clickTwo">百度</a>
        <div @click="divClick" style="width: 300px;height: 300px;background-color: red">
            <button @click.stop="btnClick">button</button>
        </div>
        <h3>按键修饰符</h3>
        <input type="text" @keyup.enter="dealEnter">
    </div>
</template>

<script>
    export default {
        name: "EventDeal",
        data(){
            return {
                msg: '',
            }
        },
        methods:{
            clickOne(args,event){
                /*方式一： 调用不能加小括号，传递隐式的事件对象$event*/
                console.log(event)
                /*方式二：如果传递了参数也想使用事件对象*/
                console.log(args)
            },
            clickTwo(){
                alert('talk is cheap show me the code')
            },
            divClick(){
                alert('div')
            },
            btnClick(){
                alert('btn')
            },
            dealEnter(event){
                alert(event['keyCode'])
            }
        }
    }
</script>

<style scoped>

</style>
