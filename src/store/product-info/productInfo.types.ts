interface IProductInfoStoreActions {
  addProduct: (data: any) => void;
}

export interface IProductInfoStore {
  data: any;
  actions: IProductInfoStoreActions;
}
