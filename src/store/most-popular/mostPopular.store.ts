import {create} from 'zustand';
import axios from 'axios';
import {ENDPOINTS} from 'services/Endpoints';
import {IMostPopularStore} from './mostPopular.types';

const initial: Omit<IMostPopularStore, 'actions'> = {
  categories: [],
};

export const useMostPopularStore = create<IMostPopularStore>(set => ({
  ...initial,
  actions: {
    fetchCategories: async () => {
      const res = await axios({
        method: 'GET',
        url: ENDPOINTS.store.categories,
      });

      if (res.status === 200) {
        const categories = res.data;
        categories.unshift('all');

        const updatedCategories = categories.map((category: string) => {
          return category.charAt(0).toUpperCase() + category.slice(1);
        });

        set({categories: updatedCategories});
      } else {
        console.log('Error');
      }
    },
  },
}));
