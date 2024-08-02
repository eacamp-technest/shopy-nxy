import {create} from 'zustand';
import {ICategoryStore} from './category.types';

const initial: Omit<ICategoryStore, 'actions'> = {
  name: 'all',
  sliderCategoryName: 'beauty',
};

export const useCategoryStore = create<ICategoryStore>(set => ({
  ...initial,
  actions: {
    addCategory(name) {
      set({name});
    },
    addSliderCategory(sliderCategoryName) {
      set({sliderCategoryName});
    },
    reset: () => set({...initial}),
  },
}));
