import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected successfully...`.green.underline);
    } catch (error) {
        console.log(error.toString().red);
        process.exit(1);
    }
};


export {
    connectDB
};