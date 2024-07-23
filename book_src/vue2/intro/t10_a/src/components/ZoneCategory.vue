<template>
  <div class="ZoneCategory">
      <h3>{{title}}分类</h3>
      <slot :games="games">我是默认值</slot>
  </div>
</template>

<script>
export default {
    name: 'ZoneCategory',
    props: ['title'],
    data() {
      return {
        // games: ["星际争霸", "dota", "英雄联盟", "王者荣耀"],
      }
    },
}
</script>

<style scoped>
.ZoneCategory{
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