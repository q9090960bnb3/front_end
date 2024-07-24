<template>
  <h3>name:{{name}}</h3>
  <h3>name:{{age}}</h3>
  <h3>工作岗位:{{job.type}}</h3>
  <h3>工作薪资:{{job.salary}}</h3>
  <h3>爱好:{{hobby}}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
  name: 'App',
  setup() {

    // 以下不是响应式数据，这样定义页面不会因数据改变更新
    // let name = '张三'
    // let age = 18

    // 以下为响应式
    let name = ref('张三')
    let age = ref(18)
    let job = reactive(
      {
        type: '前端leader',
        salary: '40k'
      }
    )

    // reactive 可以传数组或对象，转换为proxy 对象，可以直接对属性修改
    let hobby = reactive(['抽烟', '喝酒', '烫头'])

    function changeInfo() {
      name.value = '李四'
      age.value = 20
      job.type = '搬砖工'
      job.salary = '1k'
      hobby[0] = '学习'  // reactive 可以直接处理数组数据，不需要调用数组函数
    }

    return {
      name,
      age,
      job,
      hobby,
      changeInfo
    }
  }
}
</script>

