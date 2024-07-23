import {create} from 'zustand';
import {IProductDetail} from './productDetail.types';

const initial: Omit<IProductDetail, 'actions'> = {
  color: '#D9D9D9',
};

export const useProductDetailStore = create<IProductDetail>(set => ({
  ...initial,
  actions: {
    handleColor(color) {
      set({color});
    },
    reset: () => set({...initial}),
  },
}));
