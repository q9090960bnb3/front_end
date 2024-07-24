<template>
  <h2>当前n值：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前点击鼠标坐标为:({{ point.x }},{{ point.y }})</h2>
</template>

<script>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);
    let point = reactive({
      x: 0,
      y: 0,
    });

    function savePoint(event) {
      point.x = event.pageX;
      point.y = event.pageY;
    }

    onMounted(() => {
      window.addEventListener("click", savePoint);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("click", savePoint);
    });

    return {
      sum,
      point,
    };
  },
};
</script>

<style>
</style>