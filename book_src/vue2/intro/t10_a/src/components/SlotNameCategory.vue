<template>
  <div class="SlotNameCategory">
      <h3>{{title}}分类</h3>
      <slot name="center">没传时这里是默认值center</slot>
      <slot name="footer">没传时这里是默认值footer</slot>
  </div>
</template>

<script>
export default {
    name: 'SlotNameCategory',
    props: ['title']
}
</script>

<style scoped>
.SlotNameCategory{
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