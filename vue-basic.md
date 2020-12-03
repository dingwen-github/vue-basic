

# Vue Basic

## 架构理解

### MVC

#### 概念
1. M即model模型,  数据层，负责数据的处理和获取的数据接口层
2. V即View视图,  视图层, 用户看到并与之交互的界面。比如由html元素组成的网页界面，或者软件的客户端界面
3. C即controller控制器, 控制器层，它是 Model 和 View 之间的胶水或者说是中间人

#### MVC不适用与前端

1. 前端的View其实已经具备了独立处理用户事件的能力，当每个事件都流经Controller时，这层会变得十分臃肿
2. MVC中View和Controller一般是一一对应的，捆绑起来表示一个组件，视图与控制器间的过于紧密的连接让Controller和View都变得无法复用

### MVP
1. 在MVC里，View是可以直接访问Model的，但MVP中的View并不能直接使用Model，而是通过为Presenter提供接口，让Presenter去更新Model，再通过观察者模式更新View
2. 与MVC相比，MVP模式通过解耦View和Model，完全分离视图和模型，使职责划分更加清晰
3. View不依赖Model，可以将View抽离出来做成组件，它只需要提供一系列接口提供给上层操作
4. Presenter作为View和Model之间的“中间人”，除了基本的业务逻辑外，还有大量代码需要对从View到Model和从Model到View的数据进行“手动同步”，这样Presenter显得很重，维护起来会比较困难
5. 而且由于没有数据绑定，如果Presenter对视图渲染的需求增多，一旦视图需求发生改变，Presenter也需要改动

### MVVM

1. MVVM把View和Model的同步逻辑自动化了
2. 以前Presenter负责的View和Model同步不再手动地进行操作，而是交给框架所提供的数据绑定功能进行负责，只需要告诉它View显示的数据对应的是Model哪一部分即可
3. 通过ViewModel进行数据绑定，当Model发生变化，ViewModel就会自动更新；ViewModel变化，Model也会更新

### `scoped`

```css
<!--scoped 表示只在当前组件有效，可以防止对其他组件的污染-->
<style scoped>
  
</style>
```



## 项目的目录结构

### `main.js`

整个工程的入口文件

```Vue
import Vue from 'vue'
import App from './App.vue'

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
 * 生成一个 VNode节点，render 函数得到这个 VNode 节点之后
 * ，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上
 */
new Vue({
  render: h => h(App),
}).$mount('#app')
//$mount 手动挂载
```

### `App.vue`

所有组件的挂载点

### `package.json`

包依赖

### 常用指令

#### `{{}}`

1. 向页面输出数据
2. 内部可以是变量、对象调用、表达式
3. 一定要有结果

#### `v-model`

```html
<!--双向数据绑定-->
<input type="text" v-model="name">
```



#### `v-bind`

1. 向页面输出数据,常用于属性绑定
2. 内部可以是变量、对象调用、表达式
3. 一定要有结果
4. 简洁写法`:`

#### `v-on`

```html
 <!--
 1. 没有写参数默认是传递了事件对象
 2. v-on:click 可以简写为@click
 -->

<p> <button v-on:click="study">study</button></p>
<P> <button v-on:click="study('dingwen')">study</button></P>
<P> <button @click="study('dingwen')">study</button></P>
```
#### `class & style`

模板界面中，某些元素的样式是变化的，class/style用于动态绑定类和样式,支持字符串，对象，数组



```vue
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
```

#### `v-if & v-else-if & v-else`

是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建

#### `v-show`

不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换，如果需要频繁切换建议使用`v-show`

#### `v-html & v-text` 

[v-html]():更新元素的 innerHTML,在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击

[v-text]():更新元素的 textContent

#### `v-pre & v-cloak`

[v-pre]():跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。

[v-cloak]():和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕

```vue
<template>
    <div>
        <p v-cloak>{{content}}</p>
    </div>
</template>
```

```vue
<style scoped>
    [v-cloak]{
        display: none;
    }
</style>
```

#### `v-once`

只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

#### `v-slot`

提供具名插槽或需要接收 prop 的插槽

#### `ref`

提供对DOM对象的引用

### 自定义指令

#### 自定义全局指令

#### 自定义局部指令

### 计算属性& 侦听器

```vue
<template>
    <div>
        <p>ComputedAndWatch</p>
        <input type="text" placeholder="请输入姓氏:" v-model="firstName"><br>
        <input type="text" placeholder="请输入名字:" v-model="lastName"><br>

        <p>*********************************************************************</p>

        <!--for : 指定label要绑定元素的ID，用于和表单控件联系-->
        <!--显示绑定-->
        <label for="name1"></label>
        <input type="text" placeholder="请输入姓名" v-model="fullNameOne" id="name1"><br>

        <!--隐式绑定-->
        <label><input type="text" placeholder="请输入姓名" v-model="fullNameOne"></label><br>

        <!--侦听器-->
        <label><input type="text" v-model="fullNameTwo"></label>
    </div>
</template>

<script>
    export default {
        name: "ComputedAndWatch",
        data() {
            return {
                lastName: '',
                firstName: '',
                fullNameTwo: ''
            }
        },
        //计算属性: 适用于一个数据由多个数据计算而来
        computed: {
               //使用直接调用方法名
            fullNameOne: {
                get() {
                    let {lastName, firstName} = this
                    return lastName + '.' + firstName
                },
                //没有set方法表示是单项的
                set(fullName) {
                    //1.将字符串以.分隔为数组
                    let nameArr = fullName.split('.')
                    this.lastName = nameArr[1]
                    this.firstName = nameArr[0]
                }
            },
        },
        //侦听器: 适用于一个数据影响多个数据,计算属性能做的事情侦听器都能做
        watch: {
            //监听firstName
            firstName(val) {
                console.log(`watch监视到firstName的变化${val}`)
                this.fullNameTwo = val + '.' + this.lastName
            },
            //监听lastName
            lastName(val) {
                console.log(`watch监视到lastName的变化${val}`)
                this.fullNameTwo = this.firstName + '.'+ val
            }
        }
    }
</script>

<style scoped>

</style>
```

#### 计算属性

##### 作用

1. 减少模板中的计算逻辑
2. 进行数据缓存
3. 依赖固定的数据类型（响应式数据）

##### 使用

1. 在computed属性对象中定义计算属性的方法
2. 在页面中使用{{方法名}}来显示计算的结果
3. 通过getter/setter实现对属性数据的显示和监视

#### 侦听器

##### 作用

1. 比computed更加灵活
2. watch中可以执行任何逻辑，比如：函数节流、Ajax异步数据获取、甚至操作DOM
3. 依赖固定的数据类型（响应式数据）

##### 使用

1. 通过vm对象的$watch()或watch配置来监视指定的属性
2. 当属性变化时, 回调函数自动调用, 在函数内部进行计算

#### 总结

1. computed能做的，watch都能做，反之则不行
2. 能用computed的地方，尽可能使用computed
3. omputed 是计算一个新的属性，并将该属性挂载到 vm（Vue 实例）上，而 watch 是监听已经存在且已挂载到 vm 上的数据，所以用 watch 同样可以监听 computed 计算属性的变化（其它还有 data、props）
4. computed 本质是一个惰性求值的观察者，具有缓存性，只有当依赖变化后，第一次访问 computed 属性，才会计算新的值，而 watch 则是当数据发生变化便会调用执行函数
5. 从使用场景上说，computed 适用一个数据被多个数据影响，而 watch 适用一个数据影响多个数据

### 列表渲染

```vue
<template>
    <div :class="mainBox">
        <p>列表渲染</p>
        <h3>遍历数组</h3>
        <ul>
            <li v-for="(stu,index) in students" :key="studentsKeys[index]">{{stu}}</li>
        </ul>
        <h3>遍历对象</h3>
        <ul>
           <li v-for="(item,key) in students[0]" :key="key">
               {{key}}------{{item}}
           </li>
        </ul>
        <table>
           <thead>
           <tr>
               <td>name</td>
               <td>subject</td>
               <td>score</td>
           </tr>
           </thead>
            <tbody>
                <tr v-for="(stu,index) in students" :key="studentsKeys[index]">
                    <td>{{stu.name}}</td>
                    <td>{{stu.subject}}</td>
                    <td>{{stu.score}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import shortId from "shortid"
    export default {
        name: "ListRender",
        data(){
            return{
                mainBox: 'mainBox',
                students: [
                    {name: 'dingwen',subject: 'Java',score: 90},
                    {name: 'maorui',subject: 'Music',score: 88},
                    {name: '张三', subject: 'Python', score: 66},
                    {name: '李四', subject: 'Go', score: 89},
                    {name: '王五', subject: 'Flutter', score: 79},
                    {name: '赵六', subject: 'Dart', score: 59},
                    {name: '李奇', subject: 'Android', score: 88}
                ],
                studentsKeys: [],

            }
        },
        mounted() {
            this.studentsKeys = this.students.map(()=> shortId.generate());
        }
    }
</script>

<style scoped>

    .mainBox{
        text-align: center;
        vertical-align: center;
    }
    .mainBox div,table {
        margin: 0 auto;
    }
    .mainBox  ul {
        /*取消li默认样式*/
        list-style: none;
    }
</style>
```
***
```vue
<template>
    <div :class="mainBox">
        <button @click="order(0)">默认</button>
        <button @click="order(1)">升序↑</button>
        <button @click="order(2)">降序↑</button>
        <input type="text" placeholder="请输入姓名：" v-model="name">
        <table>
            <thead>
            <tr>
                <td>编号</td>
                <td>姓名</td>
                <td>科目</td>
                <td>成绩</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(stu,index) in filterStudents" :key="studentsKeys[index]">
                <td>{{studentsKeys[index]}}</td>
                <td>{{stu.name}}</td>
                <td>{{stu.subject}}</td>
                <td>{{stu.score}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import shortId from 'shortid'

    export default {
        name: "ListRenderTwo",
        data() {
            return {
                mainBox: 'mainBox',
                name: '',
                students: [
                    {name: 'dingwen', subject: 'Java', score: 90},
                    {name: 'maorui', subject: 'Music', score: 88},
                    {name: '张三', subject: 'Python', score: 66},
                    {name: '李四', subject: 'Go', score: 89},
                    {name: '王五', subject: 'Flutter', score: 79},
                    {name: '赵六', subject: 'Dart', score: 59},
                    {name: '李奇', subject: 'Android', score: 88}
                ],
                studentsKeys: [],
                orderType: 0,
            }
        },
        computed: {
            filterStudents() {
                //1.获取数据
                let {name, students, orderType} = this
                //2.取出数组中的数据
                let arr = [...students]
                //3.搜索
                name = name.toString().trim()
                if(name){
                    arr = students.filter((stu) => stu.name.indexOf(name) > -1)
                }
                //4.排序
                if(orderType){
                    arr = students.sort((s1,s2) =>{
                        switch (orderType) {
                            case 1:
                                //升序
                                return s1.score - s2.score
                            case 2:
                                //降序
                                return s2.score -s1.score

                        }
                    })
                }
                return arr
            }

        },
        methods: {
            order(orderType) {
                this.orderType = orderType
            }
        },
        mounted() {
            this.studentsKeys = this.students.map(() => shortId.generate());
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .mainBox {
        text-align: center;
        vertical-align: center;
        border: 1px solid darkcyan;
        width: 600px;
    }

    .mainBox table, .mainBox {
        margin: 0 auto;
    }

    .mainBox table td {
        border: 1px solid green;
    }

    .mainBox table {
        /*
        border-collapse使临近的边线合并成一条边线，也就避免了cellspacing中边线重合造成边线加粗的问题。
        所以在这里不提倡使用html属性设置表格边框时将cellspacing设置为0，，如果你希望他等于0，
        更提倡使用css样式属性的方法去设置表格的边框，并使用border-collapse: collapse去合并边线，而不是
        将cellspacing设置为0，造成重合边线加粗的问题*/
        /*表格全边框*/
        border-collapse: collapse;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    .mainBox button {
        margin-right: 10px;
    }

</style>
```

#### 为什么要绑定Key?

1. key是给每一个vnode的唯一id，可以依靠key，更准确、更快地拿到oldVnode中对应的vnode节点
2. 尽可能不要使用index作为key
3. 最好使用静态key作为Dom的key

### 自定义指令

#### 局部指令

```js
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
```

#### 全局指令

```js
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
```

