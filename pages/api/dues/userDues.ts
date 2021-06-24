import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { PayedDues, IPayedDues } from "@models/PayedDues";
import { User, IUser } from "@models/User";

export default async function UserDues(req: NextApiRequest, res: NextApiResponse) { 
    if (req.method !=="POST")  return res.status(404).send({status :500, message:"Route Not Found"})

    try {
        await connectToDatabase()
        const {email}  = req.body
        const user:IUser = await User.findOne({email})
        let userPayedDues = await PayedDues.find({user:user._id}).populate('user', 'name')
        return  res.json({success:"Found User Dues  ", userPayedDues})
    } catch (err) {
        return  res.status(500).send({status:500, message:err.message})
    }

}
