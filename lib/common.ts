import React from "react";
import options from "../data.json";

export function ensure<T>(x: T | null | undefined): T {
  if (x === null || x === undefined) {
    debugger;
    throw new Error(`Value must not be undefined or null`);
  } else {
    return x;
  }
}

export type LineItem = {
  id: number;
  quantity: number;
  item: typeof options[0]
}

export type Cart = {
  lineItems: LineItem[]
}

export const newCart = (): Cart => ({
  lineItems: []
});


export const handleQuantityChange = (item: typeof options[0], cart: Cart, setCart: React.Dispatch<React.SetStateAction<Cart>>) => 
  (newQuantity: number) => {
    const lineItem = cart.lineItems.find(i => i.id === item.id);
    if (lineItem) {
      lineItem.quantity = newQuantity;
    } else {
      cart.lineItems.push({
        id: item.id,
        quantity: newQuantity,
        item
      })
    }
    setCart({...cart});
  }
  

export const getQuantityItem = (item: typeof options[0], cart: Cart) => {
  const lineItem = cart.lineItems.find(i => i.id === item.id);
  if (lineItem) {
    return lineItem.quantity
  } else {
    return 0;
  }
}

export const getTotalPrice = (cart: Cart) => cart.lineItems.reduce((total, item) => total += item.quantity * item.item.price, 0) ?? 0;

export const formatPrice = (price: number) => price.toFixed(2);

export interface Product {
  product: any;
  productId: string;
  optionValues: Record<string, {
    optionId: string;
    valueId: string;
    quantity?: number;
  }>;
};

export const getProductionOptionValues = (product: Product) =>
  Object.entries(product.optionValues)
    .sort(([_a, {optionId: optionIdA }], [_b, {optionId: optionIdB}]) => 
      product.product?.fields.options.findIndex((option: any) => option.sys.id === optionIdA) - 
      product.product?.fields.options.findIndex((option: any) => option.sys.id === optionIdB)
    )
    .map(([_, { optionId, valueId, quantity }]) => ({
      quantity: product.product?.fields.options
        .find((option: any) => option.sys.id === optionId)?.fields.maximum !== undefined
        ? quantity
        : undefined,
        optionValueName: product.product?.fields.options
            .find((option: any) => option.sys.id === optionId)
            ?.fields.values.find((currOptionValue: any) => currOptionValue.sys.id === valueId)
            ?.fields.label
    }))