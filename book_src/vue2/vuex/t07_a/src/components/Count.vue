<template>
  <div>
    <h4>当前求和为: {{sum}}</h4>
    <h4>当前求和10倍为: {{bigSum}}</h4>
    <h4>学校为: {{school}}</h4>
    <h4>在哪里: {{addr}}</h4>
    <h4>下方组件人数呢: {{personList.length}} </h4>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="INCREMENT(n)">+</button>&nbsp;
    <button @click="DECREMENT(n)">-</button>&nbsp;
    <button @click="incrementIfOdd(n)">当前为奇数再加</button>&nbsp;
    <button @click="incrementAsync(n)">异步加</button>&nbsp;
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n: 1
    };
  },
  computed: {
    // 对象形式
    // ...mapState({sum:'sum', school: 'school', addr: 'addr'})

    // 数组形式
    ...mapState('countOptions', ['sum', 'school', 'addr']),

    ...mapState('personOptions', ['personList']),
    // ...mapState('personOptions', {personList: 'personOptions/personList'}),

    // 与上同理
    ...mapGetters('countOptions', ['bigSum'])
  },
  methods: {

    ...mapMutations('countOptions', ['INCREMENT', 'DECREMENT']),
    ...mapActions('countOptions', ['incrementIfOdd', 'incrementAsync'])

    // increment() {
    //     // this.$store.commit('increment', this.n)
    //     this.$store.commit('INCREMENT', this.n)
    // },
    // decrement() {
    //     // this.$store.commit('decrement', this.n)
    //     this.$store.commit('DECREMENT', this.n)
    // },
    // incrementIfOdd() {
    //     this.$store.dispatch('incrementIfOdd', this.n)
    // },
    // incrementAsync() {
    //     this.$store.dispatch('incrementAsync', this.n)
    // },
  },
  mounted() {
    console.log('this store:', this.$store);
    // console.log('personList:', this.personList);
  }
};
</script>

<style>
</style>