<template>
  <div>
    <h4>当前求和为: {{$store.state.sum}}</h4>
    <h4>当前求和10倍为: {{$store.getters.bigSum}}</h4>
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
export default {
  name: "sum",
  data() {
    return {
      n: 1
    };
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