import {create} from 'zustand';
import {IProductDetail} from './productDetail.types';

const initial: Omit<IProductDetail, 'actions'> = {
  color: '#D9D9D9',
  sliderColor: '#DE6053',
};

export const useProductDetailStore = create<IProductDetail>(set => ({
  ...initial,
  actions: {
    handleColor(color) {
      set({color});
    },
    handleSliderColor(sliderColor) {
      set({sliderColor});
    },
    reset: () => set({...initial}),
  },
}));
