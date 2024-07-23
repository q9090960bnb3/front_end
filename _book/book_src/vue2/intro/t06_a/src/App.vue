<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <!-- 属性实现传递 -->
    <School />
    <hr />
    <!-- 自定义事件实现方式 -->
    <Student />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "欢迎学习vue",
      studentName: "",
    };
  },
};
</script>

<style scoped>
.app {
  background-color: grey;
  padding: 10px;
}
</style>