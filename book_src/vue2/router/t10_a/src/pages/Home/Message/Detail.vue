<template>
  <div>
      <h4>消息ID: {{id}}</h4>
      <h4>消息内容: {{title}} </h4>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    mounted() {
        console.log('route', this.$route);
    },
    props: ['id', 'title']
}
</script>

<style>

</style>