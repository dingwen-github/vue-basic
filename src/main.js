import Vue from 'vue'
import App from './App.vue'
//导入全局css
import './assets/css/index.css'
//是否启动生产消息
Vue.config.productionTip = false

/*
//1
render: function(createElement){
    return createElement(App)
}

//2
render(createElement){
    return createElement(App);
}
//3
render(h){
  return h(App);
}

*/

/**
 * 引入animate.cdd
 */

import animated from 'animate.css'
Vue.use(animated)
/**
 * 注册全局指令
 */
Vue.directive('upper-word', ((el, binding) => {
  //el 标签
  //binding 绑定的数据
  el.textContent = binding.value.toUpperCase()
    console.log(el)
    console.log(binding)

}))

/**
 * 注册全局过滤器
 */
Vue.filter('moneyFormat',(value) =>{
    //保留四位小数
return '￥'+ Number(value).toFixed(4)
})

/**
 * 生成一个 VNode节点，render 函数得到这个 VNode 节点之后
 * ，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上
 */
new Vue({
    render: h => h(App),
}).$mount('#app')
//$mount 手动挂载
