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
  name: string;
  email: string;
}

export const getProductVariantPrice = (product: any, variantId: string) => {
  let total = product.fields.price;
  const selectedOptionValues = JSON.parse(variantId);
  selectedOptionValues.forEach((val: any) => {
    total += product.fields.options.flatMap((opt: any) => opt.fields.values).find((optVal: any) => optVal.sys.id === val)?.fields.price ?? 0;
  });
  return total;
}

export const updateCart = (productId: string, variantId: string, quantity: number, product: any, setCart: React.Dispatch<React.SetStateAction<Cart>>) => 
  setCart(cart => {
    const lineItem = cart.lineItems.find(item => item.productId === productId && item.variantId === variantId);
    const price = getProductVariantPrice(product, variantId);
    if (lineItem) {
      cart.totalQuantity += quantity - lineItem.quantity;
      cart.totalPrice += price * (quantity - lineItem.quantity);
      lineItem.quantity = quantity;
    } else {
      cart.totalQuantity += quantity;
      cart.totalPrice += price * quantity;
      cart.lineItems.push({
        productId,
        variantId,
        product,
        quantity
      })
    }
    return {...cart};
  })

export const addToCart = (productId: string, variantId: string, product: any, cart: Cart, setCart: React.Dispatch<React.SetStateAction<Cart>>) => {
  const lineItem = cart.lineItems.find(item => item.productId === productId && item.variantId === variantId);
  updateCart(productId, variantId, (lineItem?.quantity ?? 0) + 1, product, setCart);
}
