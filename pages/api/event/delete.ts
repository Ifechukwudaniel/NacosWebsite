import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { Event, IEvent } from "@models/Events";



export default async function deleteEvent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !=="DELETE")  return res.status(500).send({status :500, message:"Route Not Found"})
    try {
        await connectToDatabase()
        const {id}  = req.body
        let event = await Event.findById(id)
        if(!event ) return res.status(500).send({status:500, message:"Event was not found"})
        event.deleteOne()
        return  res.json({success:"Delete Event" })
    } catch (err) {
        return res.status(500).send({status:500, message:err.message})
    }
}
