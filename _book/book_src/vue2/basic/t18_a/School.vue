
<!-- 组件结构 -->
<template>
  <div class="demo">
    <h2>学校名称:{{ schoolName }}</h2>
    <h2>学校地址:{{ schoolAddress }}</h2>
    <button @click="tipSchool">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互代码
export default {
    name:'School',
    data() {
        return {
          schoolName: '南图小学',
          schoolAddress: '金城'
        }
      },
      methods: {
        tipSchool() {
          alert(this.schoolName)
        }
      }
};

const school = Vue.extend({
      
    })
</script>

<style lang="">
/* 组件样式 */
.demo{
    background-color: orange;
}
</style>