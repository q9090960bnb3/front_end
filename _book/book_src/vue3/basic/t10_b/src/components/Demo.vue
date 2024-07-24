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
import { reactive, ref, watch } from "vue";
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
    // watch(person, (newValue, oldValue) => {
    //   console.log(`person变化了 new:${JSON.stringify(newValue)} old:${JSON.stringify(oldValue)}`);
    // })

    // 情况四 监视 reactive 定义的一个数据, 必须写成函数
    // watch(()=>person.age, (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // })

    // 情况四 监视 reactive 定义的某些数据, 必须写成函数
    // watch([() => person.age, () => person.name], (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // });

    // 特殊情况，监视reactive 中的一个对象， 必须写deep true，否则不奏效
    watch(()=> person.job, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    return {
      person,
    };
  },
};
</script>

<style>
</style>