
<!-- 组件结构 -->
<template>
  <div class="demo">
    <h2>学生名称:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
  </div>
</template>

<script>
// 组件交互代码
export default {
    name:'School',
    data() {
        return {
          name: '小张',
          age: 30
        }
      }
};

</script>
