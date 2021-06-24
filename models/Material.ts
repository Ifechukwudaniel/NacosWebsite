import mongoose,  { model, Schema, Model, Document  } from 'mongoose';

export interface IMaterial extends Document {
    fileLink: string;
    title:string ;
}

const MaterialSchema: Schema = new Schema({
    fileLink: {
        type: String, 
        required: true
    },
    title: { 
        type:String,
        required: true 
    },
});

export const Material : Model<IMaterial> = mongoose.models.Material || model("Material", MaterialSchema)