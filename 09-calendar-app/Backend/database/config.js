import mongoose from 'mongoose'

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN)

        console.log("🚀 ~ dbConnection ~ Database connected")
    } catch (error) {
        console.log("🚀 ~ dbConnection ~ error:", error)
        throw new Error("Error connecting to database")        
    }
}