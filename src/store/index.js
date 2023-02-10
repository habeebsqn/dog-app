import { createStore } from "vuex";

export default createStore({
  state: {
    searchChar: "",
    isSearching: false,
  },

  mutations: {
    INPUT_VALUE(state, input) {
      state.searchChar = input;
    },
    IS_SEARCHING(state, input) {
      state.isSearching = input;
    },
  },
  actions: {
    inputValue(context, input) {
      context.commit("INPUT_VALUE", input);
    },
    isSearching(context, input) {
      context.commit("IS_SEARCHING", input);
    },
  },
});
