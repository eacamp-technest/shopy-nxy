import {useProductDetailStore} from './productDetail.store';
export const useProductDetailActions = () =>
  useProductDetailStore(state => state.actions);
