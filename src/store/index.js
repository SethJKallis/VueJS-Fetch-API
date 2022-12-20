import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null
  },

  getters: {
    products(state){
      return state.products
    }
  },

  mutations: {
    setProducts(state, products){
      state.products = products
    }
  },

  actions: {
    fetchProducts(context){
      return fetch('https://sethjkallis.github.io/testAPI/data.json')
      .then((response) => response.json()
      )
      .then((data) => {
        context.commit("setProducts", data.products) // specify the key of the array in JSON
      })
      .catch((err) => {
        console.warn(err)
      })
    },
  },

  modules: {
  }
})
