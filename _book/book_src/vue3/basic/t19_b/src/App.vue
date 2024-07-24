<template>
  <div class="app">
    <h3>我是App组件 car: {{name}} --- {{price}} </h3>
  </div>
</template>

<script>
import { isProxy, isReactive, isReadonly, reactive, readonly, ref, toRefs } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'
export default {
  name: 'App',
  setup() {
    let car = reactive({
        name: '奔驰',
        price: '40w'
      })

      let sum = ref(0)

      let car2 = readonly(car)

      console.log(isRef(car));
      console.log(isReactive(car));
      console.log(isReadonly(car));
      console.log(isProxy(car));
      console.log(isProxy(car2));

    return {
      ...toRefs(car)
    }
  }
}
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>