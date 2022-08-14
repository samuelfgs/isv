// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_ANON_KEY ?? ""
)

const parseQueryParam = (param: string | string[] | undefined, parse?: boolean) =>
  typeof param === 'string' ? [param] : Array.isArray(param) ? param : [];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = parseQueryParam(req.query.catchall);
  if (params.length === 0) {
    res.status(403).send("Missing table");
    return ;
  }
  const table = params[0];
  console.log("dale2", table);

  if (req.method === "GET") {
    const select = parseQueryParam(req.query.select);
    const order = parseQueryParam(req.query.select);

    let query = supabase.
      from(table)
      .select(select.join(", "));
    if (order) {
      query = query.order(order.join(","));
    }
      
    const { data, error } = await query;
    if (error) {
      res.status(500).send(error)
    } else {
      res.status(200).send(data);
    }
  } else if (req.method === "POST") {
    const body = JSON.parse(req.body);
    console.log("dale3", body, req.body);
    const { data, error } = await supabase.from(table).insert(body);
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  }
}
