// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mercadopago from "mercadopago";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("dale", "webhook2", req.body);
  res.status(200).json(true)
}
