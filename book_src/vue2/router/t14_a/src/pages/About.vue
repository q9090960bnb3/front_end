<template>
    <h3>我是About的内容</h3>
</template>

<script>
export default {
    name: 'About',

    // 通过路由规则，进入组件时调用
    beforeRouteEnter (to, from, next) {
        // ...
        console.log('About-beforeRouteEnter');
              if (to.meta.isAuth) { // meta 存储是否需要权限校验
                            // 只有为xiaoxue时才放行 news 和 message
                            if (localStorage.getItem('school') === 'xiaoxue') next()
                            else {
                                alert('学校名不正确，无权查看')
                            }
                        } else {
                            next()
                        }
        next()
    },

    // 通过路由规则，离开组件时调用
    beforeRouteLeave (to, from, next) {
        // ...
        console.log('About-beforeRouteLeave');
        next()

    }
}
</script>

<style>

</style>