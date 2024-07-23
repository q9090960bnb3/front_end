<template>
    <div>
        <h1>动画效果</h1>
        <Test />
        <h1>过度效果</h1>
        <Test2 />
        <h1>多个元素过度效果</h1>
        <Test3 />
        <h1>第三方库动画</h1>
        <Test4 />
    </div>
</template>

<script>
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'
import Test3 from './components/Test3.vue'
import Test4 from './components/Test4.vue'
export default {
  name: "App",
  components: {Test, Test2, Test3, Test4}
};
</script>

<style>
</style>