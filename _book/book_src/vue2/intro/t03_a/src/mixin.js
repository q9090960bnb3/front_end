// 混合， 共享配置， 以组件原数据为准
// 生命周期钩子会先执行混合的，再执行组件的
export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('mixin mouted');
    },
}

export const mixin2 = {
    data() {
        return {
            a: 1000,
            x: 200
        }
    },
}