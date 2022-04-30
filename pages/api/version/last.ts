// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export interface IVersion {
  version: string
  label: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IVersion>
) {
  res
    .status(200)
    .json({ version: '1.5', label: 'כוללת את פיצר "לפי חדר", תמיכה מלאה בPWA' })
}
