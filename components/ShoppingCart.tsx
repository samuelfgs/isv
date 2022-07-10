// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicShoppingCart,
  DefaultShoppingCartProps
} from "./plasmic/isv/PlasmicShoppingCart";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import ShoppingCartLineItem from "./ShoppingCartLineItem";
import { addToCart, Cart, LineItem } from "../lib/cart";
import { formatPrice } from "../lib/common";

export interface ShoppingCartProps extends DefaultShoppingCartProps {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
  onBack: () => void;
  onCheckout: () => void;
}

function ShoppingCart_(props: ShoppingCartProps, ref: HTMLElementRefOf<"div">) {

  const { cart, setCart, onBack, onCheckout, ...rest } = props;
  console.log("dale", "shopping cart", cart);


  return <PlasmicShoppingCart 
    root={{ ref }} 
    {...rest} 
    lineItems={{
      children: cart.lineItems.map((item, i) => (
        <ShoppingCartLineItem
          index={i+1}
          name={item.product.fields.name}
          price={`R$ ${formatPrice(item.product.fields.price)}`}
          even={i%2 === 1}
          quantity={item.quantity}
          onChangeQuantity={(newQuantity) => addToCart(item.productId, item.variantId, newQuantity, item.product, setCart)}
          selectedValues={JSON.parse(item.variantId)}
          product={item.product}
        />
      )
    )}}
    isEmpty={cart.lineItems.length === 0}
    totalPrice={cart.totalPrice.toFixed(2)}
    backBtn={{
      onClick: onBack
    }}
    checkoutBtn={{
      onClick: onCheckout
    }}
  />;
}

const ShoppingCart = React.forwardRef(ShoppingCart_);
export default ShoppingCart;
