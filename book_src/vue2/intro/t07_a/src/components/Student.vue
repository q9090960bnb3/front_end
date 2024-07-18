<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendName">把名称传给shool组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "Student",
  data() {
    return {
      name: "xiaoai",
      sex: "男",
      n: 1,
    };
  },
  methods: {
    sendName() {
      // this.$bus.$emit("hello", this.name);
      pubsub.publish('hello', 666)
    },
  },
};
</script>

<style lang="less" scoped>
/*  scoped 指明了作用域，只对当前组件有效 */
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 10px;
}
</style>