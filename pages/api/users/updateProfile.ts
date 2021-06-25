import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function updateProfile(req: NextApiRequest, res: NextApiResponse) {
    if(req.method!=="POST") return  res.status(500).send({ status:500, message:" Request was not found"} )

    let {email} :{ email:string} = req.body
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
