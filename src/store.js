import Vue from 'vue';
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
        title: newItem,
      });
    },
    removeItem(state, {itemIndex}) {
      state.todo.listItems.splice(itemIndex, 1);
    },
    clear(state) {
      state.todo.listItems = [];
    },
  },
});
