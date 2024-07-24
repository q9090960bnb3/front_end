<template>
  <h3>name:{{name}}</h3>
  <h3>name:{{age}}</h3>
  <button @click="sayHello">说话</button>
</template>

<script>

export default {
  name: 'App',
  setup() {
    let name = '张三'
    let age = 18

    function sayHello() {
      alert(`你好，我的名字叫${name}, 我的年龄为${age}岁`)
    }

    return {
      name,
      age,
      sayHello
    }
  }
}
</script>

