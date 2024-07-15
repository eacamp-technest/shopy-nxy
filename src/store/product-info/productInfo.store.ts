import {create} from 'zustand';
import {IProductInfoStore} from './productInfo.types';

const initial: Omit<IProductInfoStore, 'actions'> = {
  data: null,
};

export const useProductInfoStore = create<IProductInfoStore>(set => ({
  ...initial,
  actions: {
    addProduct(data) {
      set({data});
    },
    reset: () => set({...initial}),
  },
}));
