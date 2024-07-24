<template>
  <div class="child2">
    <h3>我是Child2组件</h3>
    <h4>sum:{{sum}}</h4>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: 'Child2',
    setup() {
      let sum = ref(0)

      // 只能是使用了 suspense 和 异步引入才能返回 promise 示例对象, 与 child3 等价
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve({sum})
        }, 3000)
      })

      // return {sum}
    }
}
</script>

<style>
  .child2{
    background-color: orange;
    padding: 10px;
  }
</style>