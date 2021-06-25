// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Material, IMaterial } from '@models/Material'
import type { NextApiRequest, NextApiResponse } from 'next'
import {connectToDatabase} from "../../../utils/connectToDatabase";


export default async  (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !=="POST")  return res.status(404).send({status :500, message:"Route Not Found"})
    try {
        await connectToDatabase()
        const {id}  = req.body
        let material = await Material.findById(id)
        if(!material ) return res.status(500).send({status:500, message:"Material was not found"})
        material.deleteOne()
        return  res.json({success:"Deleted Material" })
    } catch (err) {
        return  res.status(500).send({status:500, message:err.message})
    }
}