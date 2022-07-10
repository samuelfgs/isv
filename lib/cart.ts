export type LineItem = {
  productId: string;
  variantId: string;
  quantity: number;
  product: any;
}

export type Cart = {
  lineItems: LineItem[];
  totalPrice: number;
  totalQuantity: number;
}

export const addToCart = (productId: string, variantId: string, quantity: number, product: any, setCart: React.Dispatch<React.SetStateAction<Cart>>) => 
  setCart(cart => {
    const lineItem = cart.lineItems.find(item => item.productId === productId && item.variantId === variantId);
    if (lineItem) {
      cart.totalQuantity += quantity - lineItem.quantity;
      cart.totalPrice += product.fields.price * (quantity - lineItem.quantity);
      lineItem.quantity = quantity;
    } else {
      cart.totalQuantity += quantity;
      cart.totalPrice += product.fields.price * quantity;
      cart.lineItems.push({
        productId,
        variantId,
        product,
        quantity
      })
    }
    return {...cart};
  })