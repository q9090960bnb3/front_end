<template>
  <div>
    <button @click="isShow = !isShow">切换/隐藏</button>

    <!-- appear 一进来就播放动画 -->
    <transition appear> 
      <h3 v-show="isShow">你好啊</h3>
    </transition>

    <hr />
    <transition name="other">
      <h3 v-show="isShow">另一个动画</h3>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
      showClass: {
        come: false,
      },
    };
  },
};
</script>

<style scoped>
h3 {
  background-color: orange;
}

/* linear 加上为匀速 */
.v-enter-active {
  animation: mytest 1s linear;
}

.v-leave-active {
  animation: mytest 1s linear reverse;
}

.other-enter-active {
  animation: mytest 1s linear;
}

.other-leave-active {
  animation: mytest 1s linear reverse;
}


@keyframes mytest {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>