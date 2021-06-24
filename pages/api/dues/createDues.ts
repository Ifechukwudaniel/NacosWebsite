import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { PayedDues, IPayedDues } from "@models/PayedDues";

export default async function CreateDue(req: NextApiRequest, res: NextApiResponse) { 
    if (req.method !=="POST")  return res.status(404).send({status :500, message:"Route Not Found"})

    try {
        await connectToDatabase()
        const body:IPayedDues  = req.body
        let payedDue:IPayedDues = new PayedDues(body)
        await payedDue.save()
        return  res.json({success:"Saved Payed Dues"})
    } catch (err) {
        return  res.status(500).send({status:500, message:err.message})
    }

}
