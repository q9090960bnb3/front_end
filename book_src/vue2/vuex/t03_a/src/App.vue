<template>
  <div>
    <h1>原始形式</h1>
    <Count />
    <hr>
    <h1>map简写形式</h1>
    <MapCount />
  </div>
</template> 

<script>
import Count from "./components/Count.vue";
import MapCount from "./components/MapCount.vue";

export default {
  name: "App",
  components: { Count, MapCount }
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
</style>