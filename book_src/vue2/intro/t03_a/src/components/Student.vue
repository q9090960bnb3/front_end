<template>
    <div>
        <h2>学生姓名:{{ name }}</h2>
        <h2>学生性别:{{ sex }}</h2>
        <button @click="showName">show name</button>
    </div>
</template>

<script>
import { mixin } from '../mixin'

export default {
    name: 'Student',
    data() {
        return {
            name: 'xiaoai',
            sex: '男'
        }
    },
    mixins: [mixin], // 局部混合
    mounted() {
        console.log('student mouted');
    },
}
</script>

<style></style>