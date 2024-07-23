<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Search',
    data() {
        return {
            keyWord: ''
        }
    },
    methods: {
        searchUsers(){

            this.$bus.$emit('getUsers', {users:[], isLoading: true, errMsg: '' } )

            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    console.log('收到了数据:', response.data);
                    this.$bus.$emit('getUsers', response.data.items)

                    this.$bus.$emit('getUsers', {users:response.data.items, isLoading: false, errMsg: '' } )

                },
                error => {
                    console.log('出错了，', error.message);
                    this.$bus.$emit('getUsers', {users:[], isLoading: false, errMsg: error.message } )
                }
            )
        }
    },
}
</script>