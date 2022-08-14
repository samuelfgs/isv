import App from "next/app";
import { proxy, subscribe } from "valtio";
import { Cart } from "./cart";
import { Product } from "./common";

export enum AppPage {
  home,
  addItem,
  checkout
};

export interface AppState {
  cart: Cart;
  isCheckoutLoading: boolean;
};

const initializePersistentState = (key: string, defaultValue: any) => {
  const persistentData = typeof window !== "undefined" && window.sessionStorage.getItem(key);
  return persistentData ? JSON.stringify(persistentData) : defaultValue;
}

export const state = proxy<AppState>(initializePersistentState("isv-app-state", {
  cart: {
    lineItems: [],
    totalPrice: 0,
    totalQuantity: 0,
    name: "",
    email: ""
  },
  isCheckoutLoading: false,
}));

subscribe(state, () => {
  localStorage.setItem('isv-app-state', JSON.stringify(state))
})

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

export const addProductState = proxy<AddProductState>(initializePersistentState("isv-product-state", {
  product: undefined,
  productId: "",
  optionValues: {},
  sumOfOptionValuesQuantity: {},
  optionsType: {},
  selectedOptionValue: {},
  isReady: false,
}));

subscribe(state, () => {
  localStorage.setItem('isv-product-state', JSON.stringify(addProductState))
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