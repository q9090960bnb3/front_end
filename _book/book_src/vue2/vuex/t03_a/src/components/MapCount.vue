<template>
  <div>
    <h4>当前求和为: {{sum}}</h4>
    <h4>当前求和10倍为: {{bigSum}}</h4>
    <h4>学校为: {{school}}</h4>
    <h4>在哪里: {{addr}}</h4>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>&nbsp;
    <button @click="decrement">-</button>&nbsp;
    <button @click="incrementIfOdd">当前为奇数再加</button>&nbsp;
    <button @click="incrementAsync">异步加</button>&nbsp;
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: "MapCount",
  data() {
    return {
      n: 1
    };
  },
  computed: {
    // 对象形式
    // ...mapState({sum:'sum', school: 'school', addr: 'addr'})

    // 数组形式
    ...mapState(['sum', 'school', 'addr']),

    // 与上同理
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
        // this.$store.commit('increment', this.n)
        this.$store.commit('INCREMENT', this.n)
    },
    decrement() {
        // this.$store.commit('decrement', this.n)
        this.$store.commit('DECREMENT', this.n)
    },
    incrementIfOdd() {
        this.$store.dispatch('incrementIfOdd', this.n)
    },
    incrementAsync() {
        this.$store.dispatch('incrementAsync', this.n)
    },
  },
};
</script>

<style>
</style>