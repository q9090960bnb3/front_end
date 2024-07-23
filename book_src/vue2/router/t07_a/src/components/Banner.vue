<template>
  <div>
    <div class="page-header"><h2>React Router Demo</h2></div>
    <button @click="back">后退</button> &nbsp;
    <button @click="forward">前进</button> <br>
    <label>测试前进后退几步</label><input type="number" v-model.number="goNum">
    <button @click="test">GO</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
      return {
          goNum: 0
      }
  },
  methods: {
      back(){
          this.$router.back()
      },
      forward(){
          this.$router.forward()

      },
      test(){
          this.$router.go(this.goNum)
      }
  },
};
</script>

<style>
</style>