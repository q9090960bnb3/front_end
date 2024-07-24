<template>
  <label for="firstName">姓:</label><input id="firstName" type="text" v-model="person.firstName"><br>
  <label for="lastName">名:</label><input id="lastName" type="text" v-model="person.lastName"><br>
  <label>得到全名:</label>{{person.fullName}}<br>
  <label for="fullName">修改全名:</label><input id="fullName" type="text" v-model="person.fullName"><br>
  
</template>

<script>
import {reactive, computed} from "vue";
export default {
  name: "Demo",
  beforeCreate() {
    console.log(`Demo beforeCreate`);
  },
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三'
    });

    // 方式一 computed 的简写形式, 不能对全名修改
    // person.fullName = computed(()=>{
    //     return person.firstName + '-' + person.lastName
    // })

     person.fullName = computed({
         get() {
             return person.firstName + '-' + person.lastName
         },
         set(value) {
            const arr = value.split('-')
            person.firstName = arr[0]
            person.lastName = arr[1]
         }
     })

    return {
      person
    };
  },
};
</script>

<style>
</style>