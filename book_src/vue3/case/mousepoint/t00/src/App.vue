<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏和显示</button>
  <Demo v-if="isShowDemo" />
</template>

<script>
import { ref } from "@vue/reactivity";
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    let isShowDemo = ref(true);
    return {
      isShowDemo,
    };
  },
};
</script>

