import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建store

// 响应组件动作
const actions = {
    increment(context, value) {
        // console.log('in');
        context.commit('INCREMENT', value)
    },
    decrement(context, value) {
        context.commit('DECREMENT', value)
    },
    incrementIfOdd(context, value) { 
        if (value %2 !== 0) {
            context.commit('INCREMENT', value)
        }
    },
    incrementAsync(context, value) {
        setTimeout(() => {
            context.commit('INCREMENT', value)
        }, 500);
    }
}

// 用于操作数据
const mutations = {
    INCREMENT(state, value) {
        // console.log('in mutation');
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    }
}

// 用于存储数据
const state = {
    sum: 0,
    school: '小学',
    addr: 'earth'
}

// 准备getters 用于对state 数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions, mutations, state, getters
})