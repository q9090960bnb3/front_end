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
  <h2>座驾信息:{{car}}</h2>
  <button @click="name = 'xx'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <!-- <button @click="salary++">涨薪</button> -->
  <!-- toRefs 展开完必须带上 -->
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showOrginPerson">输出最原始的person</button>
  <button @click="addCar">添加座驾</button>
  <button @click="person.car.name+='!'">换车名</button>
  <button @click="person.car.price+='w'">换价格</button>
</template>

<script>
import { markRaw, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs } from "vue";
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
      car: {}
    });

    return {
      sum,
      person,
      ...toRefs(person),
      showOrginPerson(){
        // toRaw 只能处理 reactive 定义的对象
        console.log('orgin person:', toRaw(person));
      },
      addCar(){
        // person.car = {name:'奔驰', price: '20w'}

        // 如果想添加的数据不是响应式数据，使用markRaw添加
        person.car = markRaw({name:'奔驰', price: '20w'})
      }
    }
  },
};
</script>

<style>
</style>