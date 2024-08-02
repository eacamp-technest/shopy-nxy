interface IProductDetailActions {
  handleColor: (color: string) => void;
  handleSliderColor: (sliderColor: string) => void;
}

export interface IProductDetail {
  color: string;
  sliderColor: string;
  actions: IProductDetailActions;
}
