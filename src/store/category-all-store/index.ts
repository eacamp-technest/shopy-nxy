import {useCategoryStore} from './category.store';
export const useCategoryStoreActions = () =>
  useCategoryStore(state => state.actions);
