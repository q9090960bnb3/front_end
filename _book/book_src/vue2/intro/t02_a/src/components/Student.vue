<template>
    <div>
        <h3>{{ msg }}</h3>
        <h2>学生姓名:{{ name }}</h2>
        <h2>学生性别:{{ sex }}</h2>
        <h2>学生年龄:{{ myAge + 1 }}</h2>
        <button @click="modifyAge">修改年龄减1</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            msg: '快乐的一天',
            myAge: this.age
        }
    },
    methods: {
        modifyAge() {
            this.myAge -= 1
        }
    },

    // 方式一： 简单接收
    // props: ['name', 'sex', 'age'] 

    // 方式二：按类型简单接收
    // props:{
    //     name: String,
    //     sex: String,
    //     age: Number
    // }

    // 方式三：按要求接收
    props: {
        name: {
            type: String,
            required: true
        },
        sex: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 99
        }
    }
}
</script>

<style></style>