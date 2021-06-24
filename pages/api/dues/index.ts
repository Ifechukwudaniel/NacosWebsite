import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { PayedDues, IPayedDues } from "@models/PayedDues";
import {chain } from 'lodash'

export default async function getAllDues(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !=="GET")  return res.status(404).send({status :500, message:"Route Not Found"})

    try {
        await connectToDatabase()
        let payedDues = await PayedDues.find({}).populate('user',"name")
        payedDues= chain(payedDues)
        .groupBy("section")
        .map((value, key) => ({ section: key, dues: value }))
        .value()
        return  res.json({payedDues})
    } catch (err) {
        return  res.status(500).send({status:500, message:err.message})
    }
}
