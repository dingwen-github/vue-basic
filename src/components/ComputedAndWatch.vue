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
