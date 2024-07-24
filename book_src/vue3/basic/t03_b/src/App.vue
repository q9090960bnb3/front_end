<template>
  <h3>name:{{name}}</h3>
  <h3>name:{{age}}</h3>
  <button @click="sayHello">说话</button>
  <br>
  <button @click="sayHello2">说话vue2</button>
  <br>
  <button @click="test">test(v2调用v3)</button>
  <br>
  <button @click="test2">test(v3调用v2)</button>
</template>

<script>
import {h} from 'vue'
export default {
  name: 'App',
  data() {
    return {
      sex: '男'
    }
  },
  methods: {
    sayHello2() {
      alert(`你好，我的名字叫${this.name}, 我的年龄为${this.age}岁, 性别${this.age}`)
    },
    test() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.sex);
      console.log(this.sayHello);
    }
  },
  setup() {
    let name = '张三'
    let age = 18

    function sayHello() {
      alert(`你好，我的名字叫${name}, 我的年龄为${age}岁`)
    }

    function test2() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.sex);
      console.log(this.sayHello);
    }

    return {
      name,
      age,
      sayHello,
      test2
    }
  }
}
</script>

