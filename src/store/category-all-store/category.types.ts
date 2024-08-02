interface ICategoryStoreActions {
  addCategory: (name: string) => void;
  addSliderCategory: (sliderCategoryName: string) => void;
}

export interface ICategoryStore {
  name: string;
  sliderCategoryName: string;
  actions: ICategoryStoreActions;
}
