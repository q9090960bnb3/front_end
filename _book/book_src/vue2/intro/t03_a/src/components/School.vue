<template>
  <div>
    <h3>学校名称:{{ name }}</h3>
    <h3>学校地址:{{ addr }}</h3>
    <!-- <button @click="showName">show name</button> -->
      <button @click="showName">show name</button>
  </div>
</template>

<script>
// 引入混合
import {mixin} from "../mixin";
export default {
  name: "School",
  data() {
    return {
      name: "xx小学",
      addr: "earth",
    };
  },
  mixins: [mixin]
  // mixins: [mixin],
}
</script>

<style>
</style>