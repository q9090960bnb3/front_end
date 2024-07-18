<template>
  <div class="school">
    <h3>学校名称:{{ name }}</h3>
    <h3>学校地址:{{ addr }}</h3>
    <button @click="death">取消订阅</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "School",
  data() {
    return {
      name: "xx小学",
      addr: "earth",
    };
  },
  mounted() {
    // this.$bus.$on("hello", (data) => {
    //   console.log("我是school组件，收到了数据:", data);
    // });
    this.pubID = pubsub.subscribe('hello', function(msgName, data){
      console.log('有人发布了hello消息', msgName, data);
    })
  },
  beforeDestroy() {
    // this.$bus.$off("hello");

    // 两种方式均可取消订阅
    pubsub.unsubscribe(this.pubID)
    // pubsub.unsubscribe('hello')
  },
  methods: {
    death(){
      // this.$destroy()
      pubsub.unsubscribe(this.pubID)

      // pubsub.unsubscribe('hello')
      console.log('组件卸载了');
    }
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 10px;
}
</style>