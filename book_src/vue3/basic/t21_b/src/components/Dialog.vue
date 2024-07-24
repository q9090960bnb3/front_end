<template>
  <div>
    <button @click="isShow = true">点我弹窗</button>
    <!-- 将弹窗传入body中 -->
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h3>我是弹窗</h3>
          <h4>xxxxx</h4>
          <h4>xxxxx</h4>
          <h4>xxxxx</h4>
          <h4>xxxxx</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);

    return {
      isShow,
    };
  },
};
</script>

<style>
.mask{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
    position:absolute;
    top: 50%;
    left: 50%;
    /* transform 中的 translate 是参考自身 */
    transform: translate(-50%, -50%);
    text-align: center;
  height: 300px;
  width: 300px;
  background-color: green;
}
</style>