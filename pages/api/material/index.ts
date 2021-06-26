import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { Material, IMaterial } from "@models/Material";
import NextCors from 'nextjs-cors';

export default async function getAllMaterials(req: NextApiRequest, res: NextApiResponse) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    try {
        await connectToDatabase()
        let allMaterials = await Material.find({})
        return  res.send(allMaterials)
    } catch (err) {
        return  res.status(500).send({status:500, message:err.message})
    }

}
