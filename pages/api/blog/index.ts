import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { Blog } from "@models/Blogs";

export default async function getBlogs(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectToDatabase()
        let allBlogs =await Blog.find({})
        return res.json(allBlogs)
    } catch (err) {
        return res.status(500).send({status:500,message:err.message })
    }

}
