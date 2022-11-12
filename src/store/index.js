import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    products: [],
    live: [],
    brian: [],
    freddie: [],
    roger: [],
    john: [],
    queen: [],
    music: []
  },
  getters: {
    PRODUCTS(state){
      return state.products
    },
    LIVE(state){
      return state.live
    },
    BRIAN(state){
      return state.brian
    },
    FREDDIE(state){
      return state.freddie
    },
    ROGER(state){
      return state.roger
    },
    JOHN(state){
      return state.john
    },
    MUSIC(state){
      return state.music
    },
    // QUEEN(queen){
    //   return state.queen
    // }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products)=> {
      state.products = products;
    },
    SET_LIVE_TO_STATE: (state, live)=>{
      state.live = live;
    },
    SET_BRIAN_TO_STATE: (state, brian)=>{
      state.brian = brian;
    },
    SET_FREDDIE_TO_STATE: (state, freddie)=>{
      state.freddie = freddie;
    },
    SET_ROGER_TO_STATE: (state, roger)=>{
      state.roger = roger;
    },
    SET_JONH_TO_STATE: (state, john)=>{
      state.john = john;
    },
    SET_QUEEN_TO_STATE: (state, queen)=>{
      state.queen = queen;
    },
    SET_MUSIC_TO_STATE: (state, music)=>{
      state.music = music;
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
    },
     GET_BRIAN_FROM_API({commit}){
      return axios('http://localhost:3000/brianmay',{
        method: "GET"
      })
        .then((brian) => {
          commit('SET_BRIAN_TO_STATE', brian.data)
          return brian;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    GET_FREDDIE_FROM_API({commit}){
      return axios('http://localhost:3000/freddiemercury',{
        method: "GET"
      })
        .then((freddie) => {
          commit('SET_FREDDIE_TO_STATE', freddie.data)
          return freddie;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    GET_ROGER_FROM_API({commit}){
      return axios('http://localhost:3000/rogertaylor',{
        method: "GET"
      })
        .then((roger) => {
          commit('SET_LIVE_TO_STATE', roger.data)
          return roger;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    GET_JOHN_FROM_API({commit}){
      return axios('http://localhost:3000/johndeacon',{
        method: "GET"
      })
        .then((john) => {
          commit('SET_LIVE_TO_STATE', john.data)
          return john;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    GET_QUEEN_FROM_API({commit}){
      return axios('http://localhost:3000/johndeacon',{
        method: "GET"
      })
        .then((queen) => {
          commit('SET_QUEEN_TO_STATE', queen.data)
          return queen;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    GET_MUSIC_FROM_API({commit}){
      return axios('http://localhost:3000/music',{
        method: "GET"
      })
        .then((music) => {
          commit('SET_MUSIC_TO_STATE', music.data)
          return music;
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
