import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count:12,
    n: ''
}

const mutations = {
   add(state,n) {
       state.count++;
       console.log(n+1,"123")
       state.n = n+1;
   }
}

const actions= {
    // https://locally.uieee.com/slides
}

const getters = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})