import { NextRouter } from "next/router";
import { Supabase } from "../components/supabase";
import { getProductVariantPrice } from "./cart";
import { getProductionOptionValues } from "./common";
import { state } from "./state-management";

export const goToCheckout = async (name: string, email: string, payment: string | undefined, router: NextRouter, rest?: any) => {
  state.isCheckoutLoading = true;
  const items = state.cart.lineItems.map(item => ({
    id: JSON.stringify({
      productId: item.productId,
      variantId: JSON.parse(item.variantId)
    }),
    title: item.product.product.fields.name,
    description: getProductionOptionValues(item.product)
      .map(({quantity, optionValueName}) => 
        `${quantity !== undefined ? `${quantity}x ` : ``}${optionValueName}`
      ).join(", "),
    unit_price: getProductVariantPrice(item.product),
    quantity: item.quantity
  }));
  
  const external_id = `${Math.floor(Math.random() * 112345678)}`;
  const supabaseResponse = await Supabase.insert("orders", {
    name,
    email,
    ...rest,
    mercadopago_id: external_id,
    total_price: state.cart.totalPrice,
    status: state.isAdmin ? 1 : 0,
    payment: state.isAdmin ? payment : "App",
    line_items: state.cart.lineItems.map(lineItem => ({
      productId: lineItem.productId,
      variantId: JSON.parse(lineItem.variantId),
      quantity: lineItem.quantity
    }))
  });
  if (supabaseResponse.status !== 200) {
    console.log("error", supabaseResponse);
    return ;
  }

  const newOrder = await supabaseResponse.json();
  if (newOrder.length !== 1) {
    console.log("error", newOrder);
    return ;
  }

  if (!state.isAdmin) { // Mercado pago
    const response = await fetch("/api/admin", {
      method: "post",
      body: JSON.stringify({
        items,
        name,
        email,
        id: "1"
      })
    });
  
    const data = await response.json();
    const link = data.init_point;
    router.push(link);
  } else {
    router.push(`/print-order/1`)
  }
}