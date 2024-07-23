<template>
  <div>
      <h3 v-text="msg" ref="title"></h3>
      <button ref="btn" @click="showmsg">点我输出上方dom元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: { School },
  data() {
      return {
          msg: "欢迎学习vue"
      }
  },
  methods: {
    showmsg() {
      console.log(this.$refs.title); // 真实DOM元素
      console.log(this.$refs.btn); // 真实DOM元素
      console.log(this.$refs.sch); // 组件实例对象 vc
    }
  }
};
</script>

<style>
</style>