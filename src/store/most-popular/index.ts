import {useMostPopularStore} from './mostPopular.store';
export const useMostPopularStoreActions = () =>
  useMostPopularStore(state => state.actions);
