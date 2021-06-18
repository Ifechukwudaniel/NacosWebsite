import { connect, ConnectionOptions } from "mongoose"
const {
    DATABASE_URL
} = process.env

const options: ConnectionOptions = {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
}

export const connectToDatabase = () => connect(DATABASE_URL, options)