import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs'
import randomAgent from 'random-useragent'
import cheerio from 'cheerio';
import imageUploadBase64 from "@utils/imageUploadBase64";
import { User } from "@models/index";
import {IUser} from '@models/User'

export default async function loginPortal (req: NextApiRequest, res: NextApiResponse) {
    if(req.method!=="POST") return  res.status(500).send({ status:500, message:" Request was not found"} )
    let {email} :{ email:string} = req.body

    try {  
        await connectToDatabase()
        let foundUser: IUser =  await  User.findOne({email})
        if(!foundUser)  return  res.status(500).send({ status:500, message:"No user was found"} )
        return  res.json({ message:"Success", user: foundUser }) 
    } catch (err) {
        return  res.status(500).send({ status:500, message:err.message} )
    }
}
