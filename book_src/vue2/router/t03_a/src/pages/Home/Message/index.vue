<template>
  <div>
    <ul>
      <li v-for="(o) in messageList" :key="o.id">
        <!-- 第一种方式 -->
        <!-- <router-link :to="`/home/message/detail?id=${o.id}&msg=${o.title}`">{{o.title}}</router-link> -->

        <!-- 第二种方式 对象方式 -->
        <router-link :to="{
          path: '/home/message/detail',
          query: {
            id: o.id,
            msg: o.title
          }
        }">{{o.title}}</router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      messageList: [
        {id: '001' title='下来的时间'},
        {id: '002' title='找了家旅馆'},
        {id: '003' title='起来看高清'}
      ]
    }
  },
};
</script>

<style>
</style>