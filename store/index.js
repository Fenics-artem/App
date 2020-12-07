import Vuex from 'vuex';

import { storeModule } from 'moduleA';

/**
 * Create store function
 */
const createStore = () => {
  return new Vuex.Store({
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {},
    modules: {
      ...storeModule
    }
  });
};

export default createStore;
