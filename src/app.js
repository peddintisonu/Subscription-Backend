import express from "express";
import cookieParser from "cookie-parser";
import CORS from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CORS());
app.use(cookieParser());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Welcome to Subscription API");
    res.statusCode(200);
});

export default app;
