<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <Gradson />
  </div>
</template>

<script>
import Gradson from './Gradson.vue'
export default {
    name: 'Child',
    components: {Gradson}
}
</script>

<style>
  .child{
    background-color: skyblue;
    padding: 10px;
  }
</style>