<template>
  <div>
    <h2>发送请求</h2>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      // 如果当前有对应资源则不会进行代理转发
      axios.get("http://localhost:8080/v1/students").then(
        (response) => {
          console.log("请求成功", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );

      axios.get("http://localhost:8080/1.txt").then(
        (response) => {
          console.log("2请求成功", response.data);
        },
        (error) => {
          console.log("2请求失败了", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/v2/cars").then(
        (response) => {
          console.log("response", response.data);
        },
        (error) => {
          console.log("error", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>