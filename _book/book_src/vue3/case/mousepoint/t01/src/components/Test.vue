<template>
  <h2>我是test组件，我只要鼠标x:{{ point.x }}</h2>
</template>

<script>
import usePoint from "@/hooks/usePoint";
export default {
  name: "Test",
  setup() {
    return {
      point: usePoint(),
    };
  },
};
</script>

<style>
</style>