import { nanoid } from 'nanoid'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建store
const countOptions = {
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

const personOptions = {
    namespaced: true, // 调用map 函数 使用名称空间能简写，否则调用要写全名 module/function
    state: {
        personList: [{ id: '001', name: '小张' }]
    },
    actions: {
        // 添加一个姓王的人
        addPersonWang(context, value) {
            if (value.charAt(0) !== '王') return alert('输入的必须姓王')

            context.commit('ADD_PERSON', value)
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log('in state:', state, 'value:', value);
            const person = { id: nanoid(), name: value }
            state.personList.unshift(person)
        }
    },
    getters: {
        firstPerson(state) {
            if (state.personList.length === 0) return
            return state.personList[0]
        }
    }
}

export default new Vuex.Store({
    modules: { countOptions, personOptions }
})