import {connectToDatabase} from "../../../utils/connectToDatabase";
import { NextApiRequest, NextApiResponse } from "next";
import { Blog, IBlog } from "@models/Blogs";
import imageUpload from "@utils/imageUploadBase64";

export default async function CreateBlog(req: NextApiRequest, res: NextApiResponse) { 
    try {
        await connectToDatabase()
        const base64File = req.body['image']
        const content = req.body['htmlData']
        delete req.body['image']
        let {Location} =  await imageUpload(base64File)
        const blog:IBlog = req.body
        blog.blogImage = Location;
        blog.content = content;
        const newBlog = new Blog({...blog})
        await newBlog.save()
        return res.json({success:"Created Blog"})
    } catch (err) {
        return res.status(500).send({status:500,message:err.message })
    }

}
