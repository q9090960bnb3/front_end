<template>
  <h2>sum:{{sum}}</h2>  
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>a: {{a}}</h2>
  <button @click="a='你好呀'">点我修改a</button>
    <hr>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <!-- <h2>薪资:{{ salary }}k</h2>   -->
  <h2>薪资:{{ job.j1.salary }}k</h2>
  <button @click="name = 'xx'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <!-- <button @click="salary++">涨薪</button> -->
  <!-- toRefs 展开完必须带上 -->
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {

    let sum = ref(0)
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // person只读，不允许修改
    // person = readonly(person)

    // 第一层不能修改
    person = shallowReadonly(person)

    return {
      sum,
      ...toRefs(person)
    }
  },
};
</script>

<style>
</style>