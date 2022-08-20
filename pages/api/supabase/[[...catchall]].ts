// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import qs from "qs";
import { useSelectParams } from '../../../components/supabase';

export const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_ANON_KEY ?? ""
)

const parseQueryParam = (param: string | string[] | undefined, parse?: boolean) =>
  typeof param === 'string' ? [param] : Array.isArray(param) ? param : undefined;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = parseQueryParam(req.query.catchall);
  if (!params || params.length === 0) {
    res.status(403).send("Missing table");
    return ;
  }
  const table = params[0];

  if (req.method === "GET") {
    const params = qs.parse(qs.stringify(req.query ?? "{}")) as useSelectParams;
    const { columns, order, filter } = params;
    console.log("dale2", table, columns, order, filter, typeof columns);

    let query = supabase
      .from(table)
      .select(columns ? columns : "*");
    if (filter) {
      query.filter(filter.column, filter.operator, filter.value)
    }
    if (order) {
      query = query.order(order);
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
