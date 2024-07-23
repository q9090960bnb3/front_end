<template>
  <div>
    <button @click="isShow = !isShow">切换/隐藏</button>

    <transition-group name="animate__animated animate__bounce" appear
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp">
      <h3 v-show="isShow" key="1">Hello</h3>
      <h3 v-show="isShow" key="2">World</h3>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h3 {
  background-color: blue;
  /* transition: 1s linear; */
}
</style>