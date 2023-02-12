import { createStore } from "vuex";

export default createStore({
  state: {
    searchChar: "",
    isSearching: false,
    onViewDog: {},
    isLoading: false,
    onView: false,
    isError: "",
  },

  mutations: {
    INPUT_VALUE(state, input) {
      state.searchChar = input;
    },
    IS_SEARCHING(state, input) {
      state.isSearching = input;
    },
    VIEW_DOG(state, input) {
      state.onViewDog = input;
    },
    IS_LOADING(state, input) {
      state.isLoading = input;
    },
    ON_VIEW(state, input) {
      state.onView = input;
    },
    IS_ERROR(state, input) {
      state.isError = input;
    },
  },
  actions: {
    inputValue(context, input) {
      context.commit("INPUT_VALUE", input);
    },
    isSearching(context, input) {
      context.commit("IS_SEARCHING", input);
    },
    onViewDog(context, input) {
      context.commit("VIEW_DOG", input);
    },
    isLoading(context, input) {
      context.commit("IS_LOADING", input);
    },
    onView(context, input) {
      context.commit("ON_VIEW", input);
    },
    isError(context, input) {
      context.commit("IS_ERROR", input);
    },
  },
});
