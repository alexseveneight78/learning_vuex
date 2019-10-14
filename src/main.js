import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    num: 0
  },
  getters: {
    num: state => {
      return state.num;
    }
  },
  mutations: {
    plus(state){
      state.num++;
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  store: store
});

console.log(store.getters.num)
