<template>
  <h2>当前n值：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前点击鼠标坐标为:({{ point.x }},{{ point.y }})</h2>
</template>

<script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let point = usePoint();

    return {
      sum,
      point,
    };
  },
};
</script>

<style>
</style>