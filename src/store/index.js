import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './store-tasks'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      tasks
    }
  })

  return Store
}
