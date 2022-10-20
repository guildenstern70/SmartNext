/*
 *
 * SmartNext
 * A web template project for Next.js
 * Copyright (c) 2020-22 Alessio Saltarin
 * MIT License
 *
 */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
