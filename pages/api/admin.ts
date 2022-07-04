// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mercadopago from "mercadopago";
import options from "../../data.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const items = JSON.parse(req.body);
  mercadopago.configure({
    access_token: process.env.TEST_ACCESS_TOKEN!
  });

  const response = await mercadopago
    .preferences
    .create({ items });

  res.status(200).json({ ...response.body })
}
