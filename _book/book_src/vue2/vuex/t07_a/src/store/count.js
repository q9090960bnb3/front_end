export default {
    namespaced: true, // 调用map 函数 使用名称空间能简写，否则调用要写全名 module/function
    state: {
        sum: 0,
        school: '小学',
        addr: 'earth'
    },
    actions: {
        increment(context, value) {
            // console.log('in');
            context.commit('INCREMENT', value)
        },
        decrement(context, value) {
            context.commit('DECREMENT', value)
        },
        incrementIfOdd(context, value) {
            if (context.state.sum % 2 !== 0) {
                context.commit('INCREMENT', value)
            }
        },
        incrementAsync(context, value) {
            setTimeout(() => {
                context.commit('INCREMENT', value)
            }, 500);
        }
    },
    mutations: {
        INCREMENT(state, value) {
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        }
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}