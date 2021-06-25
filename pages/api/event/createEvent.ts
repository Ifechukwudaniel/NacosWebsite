import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { Event, IEvent } from "@models/Events";
import addDays from "@utils/addDays";

export default async function createEvent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !=="POST")  return res.status(404).send({status :500, message:"Route Not Found"})
    
    try {
        await connectToDatabase()
        const body:IEvent  = req.body
        body.date=new Date(body.date)
        body.expireAt= addDays(2, body.date)
        let event:IEvent = new Event(body)
        await event.save()
        return  res.json({success:"Saved Event"})
    } catch (err) {
        return  res.status(500).send({status:500, message:err.message})
    }

}
