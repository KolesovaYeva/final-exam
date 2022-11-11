import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    products: [],
    live: []
  },
  getters: {
    PRODUCTS(state){
      return state.products
    },
    LIVE(state){
      return state.live
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products)=> {
      state.products = products;
    },
    SET_LIVE_TO_STATE: (state, live)=>{
      state.live = live;
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}){
      return axios('http://localhost:3000/products',{
        method: "GET"
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    GET_LIVE_FROM_API({commit}){
      return axios('http://localhost:3000/live',{
        method: "GET"
      })
        .then((live) => {
          commit('SET_LIVE_TO_STATE', live.data)
          return live;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    }
  },
  modules: {
  }
});

export default store;
