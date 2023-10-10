// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { JWT } from "google-auth-library";
import { google } from "googleapis";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data: orders, error: err1 } = await supabase
    .from("orders")
    .select(`*`)
    .filter("id", "gte", 292);

  if (err1) {
    res.status(500).json({});
    return ;
  }
  const all = [];
  for (const order of orders) {
    if (order.status) continue;
    const mercadoPago = await (await fetch(`https://api.mercadopago.com/v1/payments/search?external_reference=${order.mercadopago_id}`, {
      headers: {
        authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    })).json();
    if (mercadoPago.paging.total < 1) continue;
    const result = mercadoPago.results.find((r:any) => r.status === "approved");
    if (!result) continue;
    console.log("dale", order.name, "approved");
    const { error } = await supabase
      .from('orders')
      .update({ status: 1 })
      .eq('id', order.id)
    if (error) {
      console.log("dale2",error);
      res.status(500).json({ all, error });
      return ;
    }
    all.push(order);
  }
  res.status(200).json({ all })
}