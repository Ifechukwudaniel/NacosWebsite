import mongoose,  { model, Schema, Model, Document  } from 'mongoose';

export interface IEvent extends Document {
    date:Date;
    title:string,
    description:string,
    expireAt: Date
}

const EventSchema: Schema = new Schema({
    date: {
        type: Date, 
        required: true,
    },
    title: {
        type : String,
        required: true
    },
    description : {
        type:String,
        required:true
    }
    
});

export const Event : Model<IEvent> = mongoose.models.Event || model("Event", EventSchema)