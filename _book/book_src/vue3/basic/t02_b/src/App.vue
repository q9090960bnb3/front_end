<template>
  <h3>name:{{name}}</h3>
  <h3>name:{{age}}</h3>
  <button @click="sayHello">说话</button>
</template>

<script>
import {h} from 'vue'
export default {
  name: 'App',
  setup() {
    let name = '张三'
    let age = 18

    // function sayHello() {
    //   alert(`你好，我的名字叫${name}, 我的年龄为${age}岁`)
    // }

  //  返回的渲染函数跟 vue2 创建 vm 的 render一样
    return () => {  
      return h('h1', '你好')
    }
  }
}
</script>

