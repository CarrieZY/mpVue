import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getter from './getter'
//声明使用vuex
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getter
})
