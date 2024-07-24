<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏和显示</button>
  <Demo v-if="isShowDemo" />
  <hr />
  <Test />
</template>

<script>
import { ref } from "@vue/reactivity";
import Demo from "./components/Demo.vue";
import Test from "./components/Test.vue";
export default {
  name: "App",
  components: { Demo, Test },
  setup() {
    let isShowDemo = ref(true);
    return {
      isShowDemo,
    };
  },
};
</script>

