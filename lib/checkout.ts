import { NextRouter } from "next/router";
import { Supabase } from "../components/supabase";
import { getProductVariantPrice } from "./cart";
import { getProductionOptionValues } from "./common";
import { state } from "./state-management";

export const goToCheckout = async (name: string, email: string, router: NextRouter) => {
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
  
  const supabaseResponse = await Supabase.insert("orders", {
    name,
    email,
    total_price: state.cart.totalPrice,
    status: 0,
    line_items: state.cart.lineItems.map(lineItem => ({
      productId: lineItem.productId,
      variantId: JSON.parse(lineItem.variantId),
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

  const response = await fetch("/api/admin", {
    method: "post",
    body: JSON.stringify({
      items,
      name,
      email,
      id: `${newOrder[0].id}`,
    })
  });

  const data = await response.json();
  const link = data.init_point;
  router.push(link);
}