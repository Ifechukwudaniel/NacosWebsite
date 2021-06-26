import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { Event, IEvent } from "@models/Events";
import addDays from "@utils/addDays";
import NextCors from 'nextjs-cors';

export default async function eventEvent(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !=="POST")  return res.status(404).send({status :500, message:"Route Not Found"})
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    
    try {
        await connectToDatabase()
        let event =  Event.findById(req.body.id)
        if(!event) return res.status(500).send({status:500, message:"Event was not found "})
        
        // return  res.json({success:"Saved Event"})
    } catch (err) {
        return  res.status(500).send({status:500, message:err.message})
    }

}
