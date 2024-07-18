export default {
    install(Vue) {
        console.log('install', Vue)

        // 插件中使用 mySlice
        Vue.filter('mySlice', function(value){
            return value.slice(0, 4)
        })

        Vue.prototype.hello = () => {alert('hello')}
    }
}