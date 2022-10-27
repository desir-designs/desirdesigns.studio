// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PageService from '@controllers/services/page'
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const data = (await PageService().getPage("home"))
    res.status(200).json(data)
}
