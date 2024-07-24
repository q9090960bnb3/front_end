<template>
  <div>
      <button @click="isShow=true">点我弹窗</button>
      <div v-if="isShow" class="dialog">
          <h3>我是弹窗</h3>
          <h4>xxxxx</h4>
          <h4>xxxxx</h4>
          <h4>xxxxx</h4>
          <h4>xxxxx</h4>
          <button @click="isShow=false">关闭弹窗</button>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
name: 'Dialog',
setup() {
    let isShow = ref(false)

    return{
        isShow
    }
}
}
</script>

<style>
.dialog{
    height: 300px;
    width: 300px;
    background-color: green;
}
</style>