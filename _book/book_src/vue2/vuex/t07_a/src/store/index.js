import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建store
import countOptions from './count'
import personOptions from './persons'

export default new Vuex.Store({
    modules: { countOptions, personOptions }
})