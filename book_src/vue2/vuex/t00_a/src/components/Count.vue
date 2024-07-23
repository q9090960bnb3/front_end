<template>
  <div>
    <h4>当前求和为：{{ count }}</h4>
    <select v-model.number="selectNum">
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
  name: "Count",
  data() {
    return {
      count: 0,
      selectNum: 1
    };
  },
  methods: {
    increment() {
        this.count += this.selectNum
    },
    decrement() {
        this.count -= this.selectNum
    },
    incrementIfOdd() {
        if (this.count % 2 !== 0) {
            this.count+= this.selectNum
        }
    },
    incrementAsync() {
        setTimeout(() => {
            this.count+= this.selectNum
        }, 1000);
    },
  },
};
</script>

<style>
</style>