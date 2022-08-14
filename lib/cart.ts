import { Product } from "./common";
import { addProductState, state } from "./state-management";
import { isEqual } from "lodash";

export type LineItem = {
  productId: string;
  variantId: string; //stringfied optionValues
  quantity: number;
  product: Product;
}

export type Cart = {
  lineItems: LineItem[];
  totalPrice: number;
  totalQuantity: number;
  name: string;
  email: string;
}

export const getProductVariantPrice = (product: Product) => {
  let total = product.product?.fields?.price;
  if (total === undefined) {
    return 0;
  }
  Object.values(product.optionValues).forEach(({ valueId: optionValueId, quantity}) => {
    total += (
      (product.product.fields.options.flatMap((opt: any) => opt.fields.values).find((optVal: any) => optVal.sys.id === optionValueId)?.fields.price ?? 0)
      * (quantity ?? 1)
    );
  });
  return total;
}

export const updateCart = (product: Product, quantity: number) => {
  const lineItem = state.cart.lineItems.find(item => 
    item.productId === addProductState.productId && isEqual(item.product.optionValues, addProductState.optionValues)
  );
  const price = getProductVariantPrice(product);
  if (lineItem) {
    state.cart.totalQuantity += quantity - lineItem.quantity;
    state.cart.totalPrice += price * (quantity - lineItem.quantity);
    lineItem.quantity = quantity;
  } else {
    state.cart.totalQuantity += quantity;
    state.cart.totalPrice += price * quantity;
    state.cart.lineItems.push({
      productId: product.productId,
      variantId: JSON.stringify(product.optionValues),
      product: JSON.parse(JSON.stringify(product)),
      quantity
    })
  }
}

export const addToCart = () => {
  const lineItem = state.cart.lineItems.find(item => 
    item.productId === addProductState.productId && isEqual(item.product.optionValues, addProductState.optionValues)
  );
  updateCart(addProductState, (lineItem?.quantity ?? 0) + 1);
}
