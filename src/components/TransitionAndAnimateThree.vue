<template>
    <!--必须改成3.5.1.版本不然不生效-->
    <div>
        <button @click="flag = !flag">切换</button>
        <transition
                enter-active-class="animated rollIn"
                leave-active-class="animated rollOut"
                :duration="{ enter: 1000, leave: 500 }"
        >
            <img v-if="flag" :src="img" alt="">
        </transition>
    </div>
</template>

<script>
    import pic from '@/assets/wechat-tx.jpg'

    export default {
        name: "TransitionAndAnimateThree",
        data() {
            return {
                img: pic,
                flag: false
            }
        },
    }
</script>

<style scoped>

</style>
