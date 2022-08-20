// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import { useRouter } from "next/router";
import GlobalContextsProvider from "../components/plasmic/isv/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/isv/PlasmicGlobalVariant__Screen";
import { PlasmicCheckout } from "../components/plasmic/isv/PlasmicCheckout";
import { useSnapshot } from "valtio";
import { state } from "../lib/state-management";
import ShoppingCartLineItem from "../components/ShoppingCartLineItem";
import { formatPrice } from "../lib/common";
import { getProductVariantPrice, updateCart } from "../lib/cart";
import { goToCheckout } from "../lib/checkout";

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

function Checkout() {
  const [ invalidState, setInvalidState ] = React.useState(false);

  const { cart, isCheckoutLoading, isAdmin } = useSnapshot(state);

  const [ name, setName ] = React.useState<string>(cart.name);
  const [ email, setEmail ] = React.useState<string>(cart.email);
  const [ payment, setPayment ] = React.useState<string | undefined>("Dinheiro");
  const router = useRouter();

  return <PlasmicCheckout
    lineItems={{
      children: cart.lineItems.map((item, i) => (
        <ShoppingCartLineItem
          index={i+1}
          name={item.product.product.fields.name}
          price={`R$ ${formatPrice(getProductVariantPrice(item.product) * item.quantity)}`}
          even={i%2 === 1}
          quantity={item.quantity}
          onChangeQuantity={(newQuantity) => updateCart(item.product, newQuantity)}
          product={item.product}
        />
      )
    )}}
    isEmpty={cart.lineItems.length === 0}
    totalPrice={cart.totalPrice.toFixed(2)}
    backBtn={{
      onClick: () => router.push("/")
    }}
    checkoutBtn={{
      onClick: () => {
        if (
          (!isAdmin && (!name || !email || !isValidEmail(email))) ||
          (isAdmin && !payment)
        ) {
          setInvalidState(true);
        } else {
          goToCheckout(name, email, payment, router);
        }
      }
    }}
    nameInput={{
      value: name,
      onChange: (e) => {
        setName(e.target.value);
        state.cart.name = e.target.value;
        setInvalidState(false);
      }
    }}
    emailInput={{
      value: email,
      onChange: (e) => {
        setEmail(e.target.value);
        state.cart.email = e.target.value;
        setInvalidState(false);
      }
    }}
    paymentInput={{
      value: payment,
      onChange: (e) => {
        setPayment(e ?? undefined);
        setInvalidState(false);
      }
    }}
    loading={{
      hide: !isCheckoutLoading
    }}
    invalidData={{
      render: (props, Component) => invalidState ? <Component {...props} /> : null
    }}
    isAdmin={isAdmin}
  />;
}

export default Checkout;
