<template>
  <div>
      <h3>人员列表</h3>
      <h4>上方求和为:{{sum}}</h4>
      <input type="text" v-model="name" />
      <button @click="add">添加人员</button>
      <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        ...mapState(['personList', 'sum'])
    },
    methods: {
        ...mapMutations(['ADD_PERSON']),

        add() {
            this.ADD_PERSON(this.name)

            this.name = ''
        }
    },
}
</script>

<style>

</style>