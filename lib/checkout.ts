import { NextRouter } from "next/router";
import { getProductVariantPrice } from "./cart";
import { state } from "./state-management";

export const goToCheckout = async (name: string, email: string, router: NextRouter) => {
  state.isCheckoutLoading = true;
  const items = state.cart.lineItems.map(item => ({
    id: JSON.stringify({
      productId: item.productId,
      variantId: JSON.parse(item.variantId)
    }),
    title: item.product.product.fields.name,
    unit_price: getProductVariantPrice(item.product),
    quantity: item.quantity
  }));

  const response = await fetch("/api/admin", {
    method: "post",
    body: JSON.stringify({
      items,
      name,
      email
    })
  });

  const data = await response.json();
  const link = data.init_point;
  router.push(link);
}