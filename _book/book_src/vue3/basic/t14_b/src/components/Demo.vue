<template>
  <h2>sum:{{x.y}}</h2>  
  <button @click="x.y++">点我+1</button>
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
import { reactive, ref, shallowReactive, shallowRef, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {

    // let person = reactive({
    
    // shallowReactive 只监控对象第一层数据响应式
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // let x = ref({
    // ref 可以把对象 转为 proxy 对象， 但 shallowRef 只能转换基本类型
    let x = shallowRef({
      y: 0
    })

    // shallowRef 如果是对象，内部属性不响应，但整体是响应式
    let a = shallowRef({
      msg: 'hi'
    })

    return {
      x,
      a,
      ...toRefs(person)
    }
  },
};
</script>

<style>
</style>