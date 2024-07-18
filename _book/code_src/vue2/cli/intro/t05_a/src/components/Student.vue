<template>
   <div class="demo">
       <h2>学生姓名:{{name}}</h2>
       <h2>学生性别:{{sex}}</h2>
        <h2 class="qwe">hehe</h2>
   </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: 'xiaoai',
            sex: '男'
        }
    },
} 
</script>

<style lang="less" scoped>
/*  scoped 指明了作用域，只对当前组件有效 */
.demo{
    background-color: orange;
    .qwe{
        font-size: 40px;
    }
}
</style>