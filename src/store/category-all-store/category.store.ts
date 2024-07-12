import {create} from 'zustand';
import {ICategoryStore} from './category.types';

const initial: Omit<ICategoryStore, 'actions'> = {
  name: 'all',
};

export const useCategoryStore = create<ICategoryStore>(set => ({
  ...initial,
  actions: {
    addCategory(name) {
      console.log(name);

      set({name});
    },
    reset: () => set({...initial}),
  },
}));
