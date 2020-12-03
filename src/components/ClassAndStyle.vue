<template>
    <div :class="main">
        <p>ClassAndStyle</p>
        <p>Class的使用</p>
        <div :class="topData">字符串</div>
        <div :class="{top: false,bottom: true}">对象(key,value) == (class,true/false)</div>
        <div :class="['top','bottom']">数组</div>
        <div :class="[topData,bottomData]">数组</div>

        <p>Style的使用</p>
        <div :style="{backgroundColor: bgColor,fontSize: fSize}">Style</div>
    </div>
</template>

<script>
    export default {
        name: "ClassAndStyle",
        data(){
            return{
                topData: 'top',
                bottomData: 'bottom',
                bgColor: 'red',
                fSize: '30px',
                main: 'main'
            }
        }
    }
</script>

<style scoped>
    .top{
        width: 600px;
        height: 600px;
        background-color: darkcyan;
    }
    .bottom{
        width: 600px;
        height: 600px;
        background-color: pink;
    }
    .main {
        /*文本水平居中*/
        text-align:center;
        /*文本垂直居中*/
        vertical-align:middle;
    }
    .main div {
        margin: 0 auto;
    }
</style>
