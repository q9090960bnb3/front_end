import axios from "axios";
import { nanoid } from "nanoid";

export default {
    namespaced: true, // 调用map 函数 使用名称空间能简写，否则调用要写全名 module/function
    state: {
        personList: [{ id: '001', name: '小张' }]
    },
    actions: {
        // 添加一个姓王的人
        addPersonWang(context, value) {
            if (value.charAt(0) !== '王') return alert('输入的必须姓王')

            context.commit('ADD_PERSON', value)
        },
        
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    // root 为 true 可以调用其他模块的信息  模块名/方法
                    context.commit('personOptions/ADD_PERSON', response.data, {root: true})
                },
                error => {
                    alert(error.message)
                }
            )
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