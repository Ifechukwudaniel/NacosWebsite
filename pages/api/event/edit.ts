import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { Event, IEvent } from "@models/Events";
import addDays from "@utils/addDays";

export default async function eventEvent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !=="POST")  return res.status(404).send({status :500, message:"Route Not Found"})
    
    try {
        await connectToDatabase()
        let event =  Event.findById(req.body.id)
        if(!event) return res.status(500).send({status:500, message:"Event was not found "})
        
        // return  res.json({success:"Saved Event"})
    } catch (err) {
        return  res.status(500).send({status:500, message:err.message})
    }

}
