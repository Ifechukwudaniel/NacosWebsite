import mongoose,  { model, Schema, Model, Document  } from 'mongoose';

export interface IUser extends Document {
    email: string;
    name: string;
    matricNumber:string,
    level:number,
    userImage:string,
    address:string,
    phone:string
}

const UserSchema: Schema = new Schema({
    email: {
        type: String, 
        required: true
    },
    name: { 
        type: String, 
        required: true 
    },
    matricNumber:{
        type:String ,
        required:true
    },
    userImage: {
        type:String,
        required:true
    },
    level: {
        type:Number,
        required:true
    },
    address: {
        type:String,
    },
    phone:{
        type:String,
    }
});

export const User : Model<IUser> = mongoose.models.User || model("User", UserSchema)