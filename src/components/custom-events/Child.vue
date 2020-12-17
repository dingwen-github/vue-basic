<template>
    <div>
        <p>Child</p>
        <button @click="childDeleteP">删除Parent中的P标签</button>
    </div>
</template>

<script>
    export default {
        name: "Child",
        methods:{
            childDeleteP(){
                this.$emit('childDeleteP',{name: 'dingwen'});
            }
        },
    }
</script>

<style scoped>

</style>
