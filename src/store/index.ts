/*
 * @Date: 2020-11-02 16:22:08
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-06 15:10:18
 */
import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    changeCount(state, payload) {
      state.count = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
