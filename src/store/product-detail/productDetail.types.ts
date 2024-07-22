interface IProductDetailActions {
  handleColor: (color: string) => void;
}

export interface IProductDetail {
  color: string;
  actions: IProductDetailActions;
}
