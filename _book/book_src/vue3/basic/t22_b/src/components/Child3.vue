<template>
  <div class="child3">
    <h3>我是Child3组件</h3>
    <h4>sum:{{sum}}</h4>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: 'Child3',
    async setup() {
      let sum = ref(0)
      let p = new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve({sum})
        }, 3000)
      })

      // 只能是使用了 suspense 和 异步引入才能返回 promise 示例对象, 与child3 等价
      return await p
    }
}
</script>

<style>
  .child3{
    background-color: blue;
    padding: 10px;
  }
</style>