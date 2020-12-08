<template>
    <div>
        <h3>格式化人民币</h3>
        <p>{{price | moneyFormat}}</p>
        <p>{{total | moneyFormatScoped}}</p>
        <h3>格式化时间</h3>
        <p>{{time | timeFormatScoped}}</p>
        <p>{{time | timeFormatScoped('YYYY/MM/DD')}}</p>
        <P>{{time | timeFormatScoped('HH:mm:ss')}}</P>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "DemoFilter",
        data(){
            return{
                price: 16655,
                total: 1665.55455,
                time: new Date()
            }
        },
        mounted(){
            setInterval(()=>{
                this.time = new Date()
            },1000)
        },
        //局部过滤器
        filters: {
            moneyFormatScoped(value){
                return '￥' + Number(value).toFixed(2)
            },
            timeFormatScoped(value,format='YYYY-MM-DD HH:mm:ss'){
                return moment(value).format(format)
            }
        }
    }
</script>

<style scoped>

</style>
