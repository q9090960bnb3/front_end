<template>
  <div class="school">
    <h3>学校名称:{{ name }}</h3>
    <h3>学校地址:{{ addr }}</h3>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "xx小学",
      addr: "earth",
    };
  },
  mounted() {
    this.$bus.$on("hello", (data) => {
      console.log("我是school组件，收到了数据:", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 10px;
}
</style>