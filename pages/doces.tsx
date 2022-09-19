import { usePlasmicQueryData } from "@plasmicapp/query"
import React from "react";
import JSONPretty from "react-json-pretty";
import { CredentialsContext, getContentfulEntry } from "../components/contentful";
import { Supabase } from "../components/supabase";
import { LineItem } from "../lib/cart";
import { ensure, getProductionOptionValues, Product } from "../lib/common";
import orders from "./backup.json";

export const Page = () => {
    const creds = ensure(React.useContext(CredentialsContext));
    const { data : data2 } = usePlasmicQueryData("um2", async () => {
        const data = await Supabase.select("orders");
        console.log("dale3", data);
        const idToProduct = new Map<string, any>();
        const parsedData: LineItem[] = [];
        let cnt = 0;
        let orders = 0;
        let total_price = 0;
        for (const order of data) {
            const mercadoPago = await (await fetch(`https://api.mercadopago.com/v1/payments/search?external_reference=${order.id}`, {
                headers: {
                authorization: "Bearer APP_USR-4846877984480703-062812-0851d62aca9c156ee183c30017844081-154849269"
                }
            })).json();
            if (mercadoPago.paging.total === 1) {
                orders += 1;
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
                }
                console.log("dale9", order);
                if (mercadoPago.results[0].status === "approved") {
                    console.log("dale99", mercadoPago);
                    total_price += mercadoPago.results[0].transaction_amount;
                }
            }
            cnt += 1;
            console.log("dale", cnt, data.length, parsedData.length, orders)
        }
        return total_price;
    });
    const data = orders;
    console.log("dale5", data);

    const map = new Map<any, any>();
    for (const item of data) {
        if (item.productId === "3fyN1VIDXA7pfvc8krzKCx") {
            continue
        }
        const key = JSON.stringify(item.variantId);
        const optionValues = getProductionOptionValues(item.product as any);
        console.log(optionValues);
        if (!map.has(key)) {
            map.set(key, { cnt : 0, optionValues, name: item.product.product.fields.name });
        }
        map.get(key)!.cnt += 1;
    }
    console.log(map);
    return <><strong>Total: </strong> R$ {data2} </>
}

export default Page;