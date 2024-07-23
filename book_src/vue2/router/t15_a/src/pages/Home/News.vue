<template>
  <ul>
      <li :style="{opacity}">欢迎学习</li>
        <li>news001 <input type="text" /></li>
        <li>news002 <input type="text" /></li>
        <li>news003 <input type="text" /></li>
    </ul>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            opacity: 1
        }
    },
    // mounted() {
    //     this.timer = setInterval(() => {
    //         this.opacity -= 0.01
    //         if (this.opacity <= 0) this.opacity = 1
    //     }, 16)
    // },
    // beforeDestroy() { 
    //     clearInterval(this.timer)
    // }
    // 路由组件2个钩子函数， 解决被缓存不能销毁timer问题
    activated(){  // News组件出现（激活）
            this.timer = setInterval(() => {
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
        }, 16)
    },
    deactivated(){  // News组件消失（失活）
        clearInterval(this.timer)  // 这样不影响缓存也可停止timer
    }
}
</script>

<style>

</style>