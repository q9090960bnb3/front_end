<template>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <!-- <h2>薪资:{{ salary }}k</h2>   -->
  <h2>薪资:{{ job.j1.salary }}k</h2>
  <button @click="name = 'xx'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <!-- <button @click="salary++">涨薪</button> -->
  <!-- toRefs 展开完必须带上 -->
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="handlerPrintPerson">person信息</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    function handlerPrintPerson() {
      console.log('person:', JSON.stringify(person))
    }

    // toRef 适合单个使用
    // return {
    //   name: toRef(person, "name"), // 这样才会让改变影响到 person对象
    //   age: toRef(person, "age"),
    //   salary: toRef(person.job.j1, "salary"),
    // };
    // return toRefs(person);
    return {
      ...toRefs(person),
      handlerPrintPerson
    }
  },
};
</script>

<style>
</style>