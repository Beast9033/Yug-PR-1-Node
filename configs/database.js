import mongoose from "mongoose"
import envConfig from "./envConfig.js"

const connectDatabase = async () => {
    try {
        await mongoose.connect(envConfig.MONGODB_URL)
        console.log("Database connected")
    } catch (error) {
        console.error("Database not connected:", error.message)
    }
}

export default connectDatabase
