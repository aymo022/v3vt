import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    menuList,
  }),
  actions: {
    accumulate() {
      this.count++;
    },
  },
});
import { createPinia } from 'pinia';

const store = createPinia();

export default store;

// export * from './modules/counter';
