import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todo: {
      listItems: [],
    },
  },
  mutations: {
    addItem(state, {newItem}) {
      if ('' === newItem) {
        return;
      }
      state.todo.listItems.push({
        id: state.todo.listItems.length,
        title: newItem,
      });
    },
    clear(state) {
      state.todo.listItems = [];
    },
  },
});
