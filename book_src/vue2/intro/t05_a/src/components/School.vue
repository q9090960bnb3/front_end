<template>
  <div class="demo">
    <h3>学校名称:{{ name }}</h3>
    <h3>学校地址:{{ addr }}</h3>
  </div>
</template>

<script>
// 引入混合
export default {
  name: "School",
  data() {
    return {
      name: "xx小学",
      addr: "earth",
    };
  },
}
</script>

<style scoped>
.demo{
  background-color: skyblue;
}
</style>