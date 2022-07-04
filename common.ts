import React from "react";
import options from "./data.json";

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