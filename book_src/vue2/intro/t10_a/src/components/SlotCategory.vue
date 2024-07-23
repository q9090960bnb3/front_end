<template>
  <div class="SlotCategory">
      <h3>{{title}}分类</h3>
      <slot>没传时这里是默认值</slot>
  </div>
</template>

<script>
export default {
    name: 'SlotCategory',
    props: ['title']
}
</script>

<style scoped>
.SlotCategory{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center; 
    background-color: orange;
}
  img{
    width: 100%;
  }
</style>