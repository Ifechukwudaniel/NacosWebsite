import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from 'nextjs-cors';

export default async function updateProfile(req: NextApiRequest, res: NextApiResponse) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

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
