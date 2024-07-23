<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <ul >
        <li v-for="(data, index) in listData" :key="index">{{data}}</li>
      </ul>
      <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.gihAGoizdsi2TYvWcGG1WQHaE1?w=287&h=187&c=7&r=0&o=5&dpr=2&pid=1.7" alt="">
      <video controls
          src="http://vjs.zencdn.net/v/oceans.mp4"
    ></video>
  </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title', 'listData']
}
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center; 
    background-color: orange;
}
  img,video{
    width: 100%;
  }
</style>