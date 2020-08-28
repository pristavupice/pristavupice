import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        activeTab: ''
    },
    mutations: {
        change(state, activeTab) {
            state.activeTab = activeTab
        }
    },
    getters: {
        activeTab: state => state.activeTab
    }
})