// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import { useRouter } from "next/router";
import ReactToPrint, { PrintContextConsumer, useReactToPrint } from "react-to-print";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import PlasmicCompletedAdminOrder from "../components/plasmic/isv/PlasmicCompletedAdminOrder";
import { resetGlobalStates } from "../lib/state-management";
import PrintOrder from "../components/PrintOrder";
import { Supabase } from "../components/supabase";
import { usePlasmicQueryData } from "@plasmicapp/query";
import { ensure, getProductionOptionValues, Product } from "../lib/common";
import { CredentialsContext, getContentfulEntry } from "../components/contentful";
import { getProductVariantPrice, LineItem } from "../lib/cart";
import JSONPretty from "react-json-pretty";

function CompletedAdminOrder() {
  const ref = React.useRef<any>();
  const creds = ensure(React.useContext(CredentialsContext));

  const handlePrint = useReactToPrint({
    content: () => ref.current
  });

  const { data, isLoading }  = usePlasmicQueryData(() =>
    creds ? JSON.stringify({creds}) : null, 
    async() => {
      const orders = [];
      const data = await Supabase.select("orders", {
      });
      console.log("dale3", data);
      const idToProduct = new Map<string, any>();
      for (const order of data) {
        const mercadoPago = await (await fetch(`https://api.mercadopago.com/v1/payments/search?external_reference=${order.id}`, {
          headers: {
            authorization: "Bearer APP_USR-4846877984480703-062812-0851d62aca9c156ee183c30017844081-154849269"
          }
        })).json();
        const mercadoPagoLineItems = mercadoPago?.results?.[0]?.additional_info?.items ?? [];
        console.log("dalex", mercadoPago);
        const parsedData: LineItem[] = [];
        for (const item of order.line_items) {
          if (!idToProduct.has(item.productId)) {
            idToProduct.set(item.productId, await getContentfulEntry<Product>(item.productId, creds));
          }
          parsedData.push({
            productId: item.productId,
            variantId: item.variantId,
            quantity: (item.quantity ?? 1),
            product: {
              product: idToProduct.get(item.productId),
              productId: item.productId,
              optionValues: item.variantId
            }
          });
          console.log(parsedData);
        }
        if (mercadoPago.paging.total === 1) {
          orders.push({
            name: order.name,
            lineItems: parsedData,
            paid: mercadoPago.paging.total === 1,
            mercadoPagoLineItems,
            id: order.id
          })
        }
      }
      return orders;
  });
  return (
    isLoading ? null :
    <>
      {data?.map(order => {
        return <PrintOrder
          id={order.id}
          name={order.name}
          lineItems={
            (order?.lineItems ?? []).map((lineItem: LineItem) => {
              const optionValues = getProductionOptionValues(lineItem.product);
              return {
                productName: lineItem.product.product.fields.name,
                quantity: lineItem.quantity ?? 1,
                description: optionValues.map(({ quantity, optionValueName }) => `${quantity ? `${quantity}x` : ``} ${optionValueName}`).join("\n"),
                totalPrice: getProductVariantPrice(lineItem.product) * lineItem.quantity
              }
            })
          }
        />
      })}
    </>
  );
}

export default CompletedAdminOrder;
