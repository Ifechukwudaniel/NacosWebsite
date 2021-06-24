import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { Material, IMaterial } from "@models/Material";

export default async function getAllMaterials(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectToDatabase()
        let allMaterials = await Material.find({})
        return  res.send(allMaterials)
    } catch (err) {
        return  res.status(500).send({status:500, message:err.message})
    }

}
