import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { Event, IEvent } from "@models/Events";

export default async function getAllEvents(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectToDatabase()
        let allEvents = await Event.find({})
        return  res.send(allEvents)
    } catch (err) {
        return  res.status(500).send({status:500, message:err.message})
    }

}
