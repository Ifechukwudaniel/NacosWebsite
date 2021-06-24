import mongoose,  { model, Schema, Model, Document, ObjectId  } from 'mongoose';
import { IUser } from './User';


export interface IPayedDues extends Document {
    section: string;
    date:Date ;
    amount:number;
    user:string | ObjectId | IUser;
}

export interface IPayedDuesAccordion {
    section:string,
    dues:IPayedDuesItem[]
}

export interface IPayedDuesItem {
    date:Date;
    user: {
        _id: string,
        name: string
    },
    amount:number
}


const PayedDuesSchema: Schema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    section: {
        type: String, 
        required: true
    },
    date: { 
        type: Date, 
        default:Date.now(),
        required: true 
    },
    amount:{
        type:Number,
        required:true
    },
});

export const PayedDues : Model<IPayedDues> = mongoose.models.PayedDues || model("PayedDues", PayedDuesSchema)