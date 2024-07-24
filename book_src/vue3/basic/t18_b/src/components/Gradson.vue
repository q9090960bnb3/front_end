<template>
  <div class="gradson">
    <h3>我是Gradson组件, 收到car: {{car.name}} --- {{car.price}} </h3>
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
  name: 'Gradson',
  setup() {
    return {
      car: inject('car')
    } 
  }
}
</script>

<style>
  .gradson{
    background-color: orange;
    padding: 10px;
  }
</style>