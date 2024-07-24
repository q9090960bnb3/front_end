<template>
  <h3 v-show="person.name">name:{{person.name}}</h3>
  <h3>name:{{person.age}}</h3>
  <h3 v-show="person.sex">sex:{{person.sex}}</h3>
  <h3>工作岗位:{{person.job.type}}</h3>
  <h3>工作薪资:{{person.job.salary}}</h3>
  <h3>hobby: {{ person.hobby }}</h3>
  <button @click="changeInfo">修改信息</button>
  <br>
  <button @click="addSex">添加性别属性</button>
  <br>
  <button @click="deleteName">删除name属性</button>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'App',
  setup() {

    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端leader',
        salary: '40k'
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })

    function changeInfo() {
      person.name = '李四'
      person.age = 20
      person.job.type = '搬砖工'
      person.job.salary = '1k'
      person.hobby[0] = '学习'  // reactive 可以直接处理数组数据，不需要调用数组函数
    }

    function addSex() {
      person.sex = '男'
    }

    function deleteName() {
      delete person.name
    }

    return {
      person,
      changeInfo,
      addSex,
      deleteName
    }
  }
}
</script>

