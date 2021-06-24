// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Material, IMaterial } from '@models/Material'
import type { NextApiRequest, NextApiResponse } from 'next'
import {connectToDatabase} from "../../../utils/connectToDatabase";

export default async  (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !=="POST")  return res.status(404).send({status :500, message:"Route Not Found"})
    try {
        await connectToDatabase()
        const body:IMaterial  = req.body
        let material:IMaterial = new Material(body)
        await material.save()
        return  res.json({success:"Saved Material"})
    } catch (err) {
        return  res.status(500).send({status:500, message:err.message})
    }
}