import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value:0
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    mutations: {
        //mutation需要同步发生
        //mutation对state的改变都是同步发生的
        //mutation只能同步改变state,但vuex为我们提供了Actions，这让我们做一些异步的动作，然后commit给mutations,好像是先来做一些异步的动作，然后通过commit的方式告诉mutation        
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {       
        updateValue({commit}, payload){
            commit('updateValue', payload);
        }
    },
    modules: {
        counter
    }
});