<template>
  <h3>name:{{ person.name }}</h3>
  <h3>age:{{ person.age }}</h3>
  <button @click="test1">测试</button>
</template>

<script>
import {reactive} from "vue";
export default {
  name: "Demo",
  props: ["msg", "school"], // 如果没声明外部又传递了，会传入context.attr中
  emits: ["hello"], // v3自定义事件不声明接收会有警告
  beforeCreate() {
    console.log(`Demo beforeCreate`);
  },
  setup(props, context) {
    // setup 比 beforeCreate早
    console.log(`Demo setup props`, props);
    console.log(`Demo setup context`, context);
    console.log(`Demo setup context attrs`, context.attrs);
    console.log(`Demo setup context slots`, context.slots);
    let person = reactive({
      name: "张三",
      age: 18,
    });

    // function test1(){
    //     context.emit('hello', 'hi')
    // }

    return {
      person,
      test1() {
        context.emit("hello", "hi");
      },
    };
  },
};
</script>

<style>
</style>