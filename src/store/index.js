import Vue from 'vue';
import Vuex from 'vuex';
import listModule from './listModule';

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      listModule,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
}
