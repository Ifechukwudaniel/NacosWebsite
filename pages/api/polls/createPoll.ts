import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createEvent(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectToDatabase()
        res.json({working:true})
    } catch (err) {
        res.status(500).send(
            {
                status:500,
                message:err.message
            }
        )
    }

}
