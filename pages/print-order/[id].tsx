// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import { useRouter } from "next/router";
import ReactToPrint, { PrintContextConsumer, useReactToPrint } from "react-to-print";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import PlasmicCompletedAdminOrder from "../../components/plasmic/isv/PlasmicCompletedAdminOrder";
import { resetGlobalStates } from "../../lib/state-management";
import PrintOrder from "../../components/PrintOrder";
import { Supabase } from "../../components/supabase";
import { usePlasmicQueryData } from "@plasmicapp/query";
import { ensure, getProductionOptionValues, Product } from "../../lib/common";
import { CredentialsContext, getContentfulEntry } from "../../components/contentful";
import { getProductVariantPrice, LineItem } from "../../lib/cart";
import JSONPretty from "react-json-pretty";

function CompletedAdminOrder() {
  const ref = React.useRef<any>();
  const creds = ensure(React.useContext(CredentialsContext));
  const router = useRouter();
  const { id : orderId } = router.query;
  console.log("dale", orderId, creds);

  const handlePrint = useReactToPrint({
    content: () => ref.current
  });

  const { data, isLoading }  = usePlasmicQueryData(() => orderId && creds ? JSON.stringify({orderId, creds}) : null, async() => {
    const data = await Supabase.select("orders", {
      filter: {
        column: "id",
        operator: "eq",
        value: orderId
      }
    });
    const idToProduct = new Map<string, any>();
    const parsedData: LineItem[] = [];
    
    const mercadoPago = await (await fetch(`https://api.mercadopago.com/v1/payments/search?external_reference=${orderId}`, {
      headers: {
        authorization: "Bearer APP_USR-4846877984480703-062812-0851d62aca9c156ee183c30017844081-154849269"
      }
    })).json();
    const mercadoPagoLineItems = mercadoPago?.results?.[0]?.additional_info?.items ?? [];

    for (const item of data[0].line_items) {
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
    console.log("mercadopago3", mercadoPago.paging);
    return {
      name: data[0].name,
      lineItems: parsedData,
      paid: mercadoPago.paging.total === 1,
      mercadoPagoLineItems,
    }
  });

  console.log("dale", data);
  return (
    isLoading ? null :
    <>
      {!data?.paid ? <h1>Nao foi pago</h1> : null}
      <JSONPretty data={data?.mercadoPagoLineItems} />
      <button onClick={() => handlePrint()}>Print</button>
      <PlasmicCompletedAdminOrder
        printBtn={{
          onClick: handlePrint
        }}
        homeBtn={{
          onClick: () => {
            resetGlobalStates();
            router.push("/");
          }
        }}
      />
      {data?.name}
      <PrintOrder 
        ref={ref} 
        id={orderId}
        lineItems={
          (data?.lineItems ?? []).map((lineItem: LineItem) => {
            const optionValues = getProductionOptionValues(lineItem.product);
            return {
              productName: lineItem.product.product.fields.name,
              quantity: lineItem.quantity ?? 1,
              description: optionValues.map(({ quantity, optionValueName }) => `${quantity ? `${quantity}x` : ``} ${optionValueName}`).join("\n"),
              totalPrice: getProductVariantPrice(lineItem.product) * lineItem.quantity
            }
          })
        }
        name={data?.name}
      />
    </>
  );
}

export default CompletedAdminOrder;
