<template>
  <h2>当前n值：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import { reactive, ref, watch, watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    let sum = ref(0);

    return {
      sum
    };
  },
  // 配置项形式写生命周期钩子
  beforeCreate() {
    console.log(`Demo beforeCreate`);
  },
  created() {
    console.log(`Demo created`);
  },
  beforeMount() {
    console.log(`Demo beforeMount`);
  },
  mounted(){
    console.log(`Demo mounted`);
  },
  beforeUpdate() {
    console.log(`Demo beforeUpdate`);
  },
  updated() {
    console.log(`Demo updated`);
  },
  beforeDestroy() {
    console.log(`Demo beforeDestroy 废弃`);
  },
  destroyed() {
    console.log(`Demo destroyed 废弃`);
  },
  beforeUnmount() {
    console.log(`Demo beforeUnmount`);
  },
  unmounted(){
    console.log(`Demo unmounted`);
  }
};
</script>

<style>
</style>