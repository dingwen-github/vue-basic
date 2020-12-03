<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{name.toString().toLocaleLowerCase()}}</h2>

    <!--双向数据绑定-->
    <input type="text" v-model="name">

    <br>
    <a href="site">百度</a>
    <br>
    <a :href="site">百度</a>
    <br>
    <a v-bind:href="site">百度</a>

    <!--
    1. 没有写参数默认是传递了事件对象
    2. v-on:click 可以简写为@click
    -->

   <p> <button v-on:click="study">study</button></p>
   <P> <button v-on:click="study('dingwen')">study</button></P>
   <P> <button @click="study('dingwen')">study</button></P>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // 父组件的传值
  data(){
    return {
      name: 'name',
      site: 'https://www.baidu.com'
    }
  },
  methods:{
    study(name){
      alert(name)
    }
  },
  props: {
    msg: String
  }
}
</script>
<!--scoped 表示只在当前组件有效，可以防止对其他组件的污染-->
<style scoped>

</style>
