interface IAllItemsStoreActions {
  fetchCategory: () => void;
}

export interface IAllItemsStore {
  category: any[];
  items: string;
  actions: IAllItemsStoreActions;
}
