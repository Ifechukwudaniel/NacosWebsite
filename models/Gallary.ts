import mongoose,  { model, Schema, Model, Document  } from 'mongoose';

export interface IGallery extends Document {
   images:string[]
}

const GallerySchema: Schema = new Schema({
    images: [{
        type : String,
        required: true
    }],
});

export const Gallery : Model<IGallery> = mongoose.models.Gallery || model("Gallery", GallerySchema)