<template>
  <h3>name:{{name}}</h3>
  <h3>name:{{age}}</h3>
  <h3>工作岗位:{{job.type}}</h3>
  <h3>工作薪资:{{job.salary}}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup() {

    // 以下不是响应式数据，这样定义页面不会因数据改变更新
    // let name = '张三'
    // let age = 18

    // 以下为响应式
    let name = ref('张三')
    let age = ref(18)
    let job = ref(
      {
        type: '前端leader',
        salary: '40k'
      }
    )

    function changeInfo() {
      name.value = '李四'
      age.value = 20
      job.value.type = '搬砖工'
      job.value.salary = '1k'
    }

    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

