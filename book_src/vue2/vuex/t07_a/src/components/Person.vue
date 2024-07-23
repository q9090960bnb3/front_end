<template>
  <div>
      <h3>人员列表</h3>
      <h4>上方求和为:{{sum}}</h4>
      <input type="text" v-model="name" />
      <button @click="add">添加人员</button> <br />
      <input type="text" v-model="nameWang" />
      <button @click="addWang">添加姓王的成员</button> <br/>
      <button @click="addNameFromServer">添加服务器返回的名字</button>
      <h4>第一个成员是:{{firstPerson.name}}</h4>
      <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'Person',
    data() {
        return {
            name: '',
            nameWang: ''
        }
    },
    computed: {
        sum() {
            return this.$store.state.countOptions.sum
        },
        personList() {
            return this.$store.state.personOptions.personList
        },
        firstPerson() {
            return this.$store.getters['personOptions/firstPerson']
        }
    },
    methods: {
        add() {
            this.$store.commit('personOptions/ADD_PERSON', this.name)

            this.name = ''
        },
        addWang() {
            this.$store.dispatch('personOptions/addPersonWang', this.nameWang)

            this.nameWang = ''
        },
        addNameFromServer() {
            this.$store.dispatch('personOptions/addPersonServer')
        }
    },
}
</script>

<style>

</style>