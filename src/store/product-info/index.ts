import {useProductInfoStore} from './productInfo.store';
export const useProductInfoStoreActions = () =>
  useProductInfoStore(state => state.actions);
