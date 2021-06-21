import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllDues(req: NextApiRequest, res: NextApiResponse) {
   
    try {
        await connectToDatabase()
        res.json({working:true})
    } catch (err) {
        res.status(500).send(
            {
                status:500,
                message:"Could Not Connect To Db"
            }
        )
    }

}
