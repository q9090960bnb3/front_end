<template>
  <div class="gradson">
    <h3>我是Gradson组件,</h3>
    <Dialog />
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
  name: 'Gradson',
  components: {Dialog}
}
</script>

<style>
  .gradson{
    background-color: orange;
    padding: 10px;
  }
</style>