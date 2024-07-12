interface ICategoryStoreActions {
  addCategory: (name: string) => void;
}

export interface ICategoryStore {
  name: string;
  actions: ICategoryStoreActions;
}
