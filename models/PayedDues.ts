import mongoose,  { model, Schema, Model, Document  } from 'mongoose';

export interface IPayedDues extends Document {
    section: string;
    date:Date ;
    amount:number,
}

const PayedDuesSchema: Schema = new Schema({
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