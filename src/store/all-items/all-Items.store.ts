import {create} from 'zustand';
import axios from 'axios';
import {ENDPOINTS} from 'services/Endpoints';
import {IAllItemsStore} from './all-items.types';

const initial: Omit<IAllItemsStore, 'actions'> = {
  allCategory: [],
  items: [],
};

export const useAllItemsStore = create<IAllItemsStore>(set => ({
  ...initial,
  actions: {
    fetchCategory: async () => {
      const res = await axios({
        method: 'GET',
        url: ENDPOINTS.store.categories,
      });

      if (res.status === 200) {
        set(state => ({
          allCategory: [...state.allCategory, ...res.data],
        }));
      } else {
        console.log('Error');
      }
    },
  },
}));
