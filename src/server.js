import app from "./app.js";

// Local imports
import { ENV } from "./config/env.config.js";
import connectDB from "./db/db.js";

const Port = ENV.PORT;

connectDB()
    .then(() => {
        app.listen(Port, () => {
            console.log("Server listening on Port:", Port);
        });
    })
    .catch((err) => {
        console.log("MONGODB CONNECTION ERROR: ", err);
    });
