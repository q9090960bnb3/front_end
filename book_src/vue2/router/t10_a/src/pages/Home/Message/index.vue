<template>
  <div>
    <ul>
      <li v-for="o in messageList" :key="o.id">
        <!-- 第一种方式 -->
        <!-- <router-link :to="`/home/message/detail/${o.id}/${o.title}`">{{o.title}}</router-link> -->

        <!-- 第二种方式 对象方式 -->
        <router-link
          :to="{
            name: 'detailRouter', // 对象方式只能使用命名路由
            params: {
              id: o.id,
              title: o.title,
            },
          }"
          >{{ o.title }}</router-link
        >
        <button @click="pushShow(o)">push查看</button>
        <button @click="replaceShow(o)">replace查看</button>
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
        { id: "001" title="下来的时间" },
        { id: "002" title="找了家旅馆" },
        { id: "003" title="起来看高清" },
      ],
    };
  },
  methods: {
    pushShow(o) {
      this.$router.push({
        name: "detailRouter", // 对象方式只能使用命名路由
        params: {
          id: o.id,
          title: o.title,
        },
      });
    },
    replaceShow(o) {
      this.$router.replace({
        name: "detailRouter", // 对象方式只能使用命名路由
        params: {
          id: o.id,
          title: o.title,
        },
      });
    },
  },
  beforeDestroy(){
      console.log('Message即将销毁');
  }
};
</script>

<style>
</style>