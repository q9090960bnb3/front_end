<template>
  <Demo @hello="showHelloMsg" msg="你好" school="小学">
    <template v-slot:h1>
      <div>
        hi 1
      </div>
    </template>
    <template v-slot:h2>
      <div>
        hi 2
      </div>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: {Demo},
  setup(){
    function showHelloMsg(value){
      console.log(`show hello msg:${value}`);
    }
    return {
      showHelloMsg
    }
  }
}
</script>

