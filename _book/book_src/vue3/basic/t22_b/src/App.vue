<template>
  <div class="app">
    <h3>我是App组件</h3>
    <!-- 如果不引入Suspense 且为异步引入，当App 组件先出来用户可能接收不到提示 -->
    <Suspense >
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>稍等。。。</h3>
      </template>
    </Suspense>
    <hr />
    <Suspense >
      <template v-slot:default>
        <Child2 />
      </template>
      <template v-slot:fallback>
        <h3>稍等2。。。</h3>
      </template>
    </Suspense>
    <hr />
    <Suspense >
      <template v-slot:default>
        <Child3 />
      </template>
      <template v-slot:fallback>
        <h3>稍等3。。。</h3>
      </template>
    </Suspense>

    <h4>end....</h4>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
// 动态引入  网速如果慢 app先出来 child 后出来
const Child = defineAsyncComponent(() => import("./components/Child.vue"));
const Child2 = defineAsyncComponent(() => import("./components/Child2.vue"));
const Child3 = defineAsyncComponent(() => import("./components/Child3.vue"));
// 静态引入
// import Child from './components/Child.vue'
export default {
  name: "App",
  components: { Child, Child2, Child3 },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>