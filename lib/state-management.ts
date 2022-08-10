import App from "next/app";
import { proxy } from "valtio";
import { Cart } from "./cart";
import { Product } from "./common";

export enum AppPage {
  home,
  addItem,
  checkout
};

export interface AppState {
  cart: Cart;
  appPage: AppPage;
  isCheckoutLoading: boolean;
};

export const state = proxy<AppState>({
  cart: {
    lineItems: [],
    totalPrice: 0,
    totalQuantity: 0,
    name: "",
    email: ""
  },
  appPage: AppPage.home,
  isCheckoutLoading: false,
});

export enum OptionType {
  single,
  multi
}

interface AddProductState extends Product {
  sumOfOptionValuesQuantity: Record<string, number>;
  optionsType: Record<string, OptionType>;
  selectedOptionValue: Record<string, string>;
  isReady: boolean;
}
export const addProductState = proxy<AddProductState>({
  product: undefined,
  productId: "",
  optionValues: {},
  sumOfOptionValuesQuantity: {},
  optionsType: {},
  selectedOptionValue: {},
  isReady: false,
})

export const getAddProductStateVariantId = () => 
  JSON.stringify(addProductState);
  
export const resetAddProductState = () => {
  addProductState.product = undefined;
  addProductState.productId = "";
  addProductState.optionValues = {};
  addProductState.optionsType = {};
  addProductState.selectedOptionValue = {};
  addProductState.isReady = false;
}