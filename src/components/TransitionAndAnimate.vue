<template>
    <div>
        <p>过渡和动画</p>
        <button @click="show = !show">切换</button>
        <transition name="fade">
            <div class="box" v-if="show">talk is cheap show me the code</div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "TransitionAndAnimate",
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 200px;
        height: 200px;
        background-color: orangered;
        color: white;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: translateX(200px) scale(3);
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 2s ease-in-out;
    }
</style>
