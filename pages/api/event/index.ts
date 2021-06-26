import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { Event, IEvent } from "@models/Events";
import NextCors from 'nextjs-cors';

export default async function getAllEvents(req: NextApiRequest, res: NextApiResponse) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    try {
        await connectToDatabase()
        let allEvents = await Event.find({})
        return  res.send(allEvents)
    } catch (err) {
        return  res.status(500).send({status:500, message:err.message})
    }

}
