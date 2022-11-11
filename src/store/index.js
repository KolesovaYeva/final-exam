import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    products: [],
    // band: []
  },
  getters: {
    PRODUCTS(state){
      return state.products
    },
    // MATES(state){
    //   return state.band
    // }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products)=> {
      state.products = products;
    },
    // SET_MATE_TO_STATE: (state, band)=>{
    //   state.band = band;
    // }
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
    // GET_MATE_FROM_API({commit}){
    //   return axios('http://localhost:3000/band',{
    //     method: "GET"
    //   })
    //     .then((band) => {
    //       commit('SET_MATE_TO_STATE', band.data)
    //       return band;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       return error;
    //     })
    // }
  },
  modules: {
  }
});

export default store;
