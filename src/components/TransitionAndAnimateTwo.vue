<template>
    <div>
        <button @click="flag = !flag">切换</button>
        <transition name="bounce">
            <img :src="image" v-if="flag">
        </transition>
    </div>
</template>

<script>
    //@ 表示
    import weChatHeadImage from '@/assets/wechat-tx.jpg'

    export default {
        name: "TransitionAndAnimateTwo",
        data() {
            return {
                image: weChatHeadImage,
                flag: false
            }
        }
    }
</script>

<style scoped>
    .bounce-enter-active {
        animation: bounce 1s;
    }

    .bounce-leave-active {
        animation: bounce 1s reverse;
    }

    @keyframes bounce {
        0% {
            transform: scale(0);
        }

        25% {
            transform: scale(0.2);
        }
        50% {
            transform: scale(0.4);
        }
        75% {
            transform: scale(0.6);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
