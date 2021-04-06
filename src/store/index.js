import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userHasEnteredInfo: false,
    userInfo: {},
  },
  mutations: {
    setUserEnteredInfoState(state, userInfo) {
      state.userInfo = userInfo;
      state.userHasEnteredInfo = true;
    },
  },
});
