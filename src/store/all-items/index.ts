import {useAllItemsStore} from './all-Items.store';
export const useAllItemsStoreActions = () =>
  useAllItemsStore(state => state.actions);
