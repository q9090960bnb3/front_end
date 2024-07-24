<template>
  <h2>当前n值：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <h2>当前信息:{{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
</template>

<script>
import {ref, watch} from "vue";
export default {
  name: "Demo",
  beforeCreate() {
    console.log(`Demo beforeCreate`);
  },
  setup() {
    let sum = ref(0)
    let msg = ref('你好')

    // 情况一 一个响应式数据
    // watch(sum, (newValue, oldValue) => {
    //     console.log(`sum 变化了, newValue:${newValue}, oldValue:${oldValue}`);
    // })

    // 方式二 watch 监视多个数据，watch 可以调用多次
    // watch(sum, (newValue, oldValue) => {
    //     console.log(`sum 变化了, newValue:${newValue}, oldValue:${oldValue}`);
    // })
    // watch(msg, (newValue, _) => {
    //     console.log(`msg 变化了 新的为 ${newValue}`);
    // }) 

    // 方式三 watch 直接多个监视
    // watch([sum, msg], (newValue, oldValue) => {
    //     console.log(newValue, oldValue);
    // })

    // watch 传递 参数
    watch(sum, (newValue, oldValue) => {
        console.log(`sum 变化了, newValue:${newValue}, oldValue:${oldValue}`);
    }, {immediate: true})

     person.fullName = computed({
         get() {
             return person.firstName + '-' + person.lastName
         },
         set(value) {
            const arr = value.split('-')
            person.firstName = arr[0]
            person.lastName = arr[1]
         }
     })

    return {
      person
    };
  },
};
</script>

<style>
</style>