import mongoose,  { model, Schema, Model, Document  } from 'mongoose';
import slug from 'mongoose-slug-generator'

export interface IBlog extends Document {
    date:Date;
    title:string,
    slug: string,
    content:string,
    blogImage: string
}

mongoose.plugin(slug);

const BlogSchema: Schema = new Schema({
    date: {
        type: Date, 
        default:Date.now(),
        required: true,
    },
    title: {
        type : String,
        required: true
    },
    slug: { 
        type: String, 
        slug: ["title"], 
        unique: true 
    },
    content: {
        type:String,
        required:true
    },
    blogImage:{
        type:String,
        required:true 
    }
});

export const Blog : Model<IBlog> = mongoose.models.Blog || model("Blog", BlogSchema)