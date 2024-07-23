<template>
  <div>
      <h4>消息ID: {{$route.params.id}}</h4>
      <h4>消息内容: {{$route.params.title}} </h4>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    mounted() {
        console.log('route', this.$route);
    }
}
</script>

<style>

</style>