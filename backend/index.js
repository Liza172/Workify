import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});
import userRoute from "./routes/user.route.js"

const app = express();

app.get("/home", (req, res) =>
{
  return res.status(200).json({
    message: "I am coming from backend",
    succss : true
  })
})

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corOptions = {
  origin : "http//localhost:5173",
  credentials : true
}
app.use(cors(corOptions));

const PORT = process.env.PORT || 3000;

//api's
app.use("/api/v1/user", userRoute);

app.listen(PORT, () =>
{
  connectDB();
  console.log(`Server running at port ${PORT}`)
})