<template>
  <h2>当前n值：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <h2>当前信息:{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.salary }}k</h2>
  <button @click="person.name = 'xx'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.salary++">涨薪</button>
</template>

<script>
import { reactive, ref, watch, watchEffect } from "vue";
export default {
  name: "Demo",
  beforeCreate() {
    console.log(`Demo beforeCreate`);
  },
  setup() {
    let sum = ref(0);
    let msg = ref("你好");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 情况一 watch 监视 reactive, newValue oldValue有问题, 都显示最新的值, 且deep无效
    watch(sum, (newValue, oldValue) => {
      console.log(`person变化了 new:${JSON.stringify(newValue)} old:${JSON.stringify(oldValue)}`);
    })

    watchEffect(()=>{
      const x1 = sum.value
      const x2 = msg.value
      console.log(`用啥监视啥, x1:${x1}, x2:${x2}}`);
    })


    return {
      person,
    };
  },
};
</script>

<style>
</style>