import mongoose from "mongoose";

// Local imports
import { ENV } from "../config/env.config.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(ENV.MONGO_URI);
        console.log(
            `MONGODB CONNECTED SUCCESSFULLY: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log(`MONGODB CONNECTION FAILED: ${error}`);
        process.exit(1);
    }
};

export default connectDB;
