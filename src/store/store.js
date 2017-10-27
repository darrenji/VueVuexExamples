import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' clicks';
        }
    },
    mutations: {
        //mutation需要同步发生
        //mutation对state的改变都是同步发生的
        //mutation只能同步改变state,但vuex为我们提供了Actions，这让我们做一些异步的动作，然后commit给mutations,好像是先来做一些异步的动作，然后通过commit的方式告诉mutation
        
        increment: (state,payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        }
    },
    actions: {
        increment: (context, payload) => {
            context.commit('increment', payload);
        },
        decrement: ({commit}, payload) => {
            commit('decrement', payload);
        },
        asyncIncrement: ({commit}, payload) => {
            setTimeout(()=>{
                commit('increment', payload.by);
            },payload.duration);
        },
        asyncDecrement: ({commit}, payload) => {
            setTimeout(()=> {
                commit('decrement', payload.by);
            },payload.duration);
        }
    }
});