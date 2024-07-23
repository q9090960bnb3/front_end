<template>
  <div>
    <button @click="isShow = !isShow">切换/隐藏</button>

    <!-- appear 一进来就播放动画 -->
    <transition-group appear> 
      <h3 v-show="isShow" key="1">Hello</h3>
      <h3 v-show="isShow" key="2">World</h3>
    </transition-group>

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
  background-color: skyblue;
  /* transition: 1s linear; */
}

.v-enter-active,.v-leave-active{
  transition: 1s linear;
}

/* 进入的起点 离开的终点*/
.v-enter, .v-leave-to{
  transform: translateX(-100%);
}

/* 进入的终点 离开的起点 */
.v-enter-to, .v-leave{
  transform: translateX(0);
}

</style>