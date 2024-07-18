interface IMostPopularStoreActions {
  fetchCategories: () => void;
}

export interface IMostPopularStore {
  categories: any[];
  actions: IMostPopularStoreActions;
}
