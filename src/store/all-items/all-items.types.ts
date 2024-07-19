interface IAllItemsStoreActions {
  fetchCategory: () => void;
}

export interface IAllItemsStore {
  allCategory: any[];
  items: string[];
  actions: IAllItemsStoreActions;
}
