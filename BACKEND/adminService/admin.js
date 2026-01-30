import express from "express"
const app=express();
import dotenv from "dotenv";
dotenv.config();
import mongoose  from "mongoose";
const MONGO_URL=process.env.MONGO_URL;
const PORT=process.env.PORT||5004;
import { adminAppointmentRouter } from "./routes/appointment.route.js";
import cookieParser from "cookie-parser";
import { adminUserRouter } from "./routes/user.route.js";
import { adminRouter } from "./routes/admin.route.js";
import { authMiddleware } from "./utils/authMiddleware.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use("/appointments",authMiddleware,adminAppointmentRouter);
app.use("/users",authMiddleware,adminUserRouter);
app.use("/admin",adminRouter);






app.listen(PORT,async()=>{
        await mongoose.connect(MONGO_URL);
        console.log("Admin DB connected");
        console.log(`Admin services listening on PORT ${PORT}`);
})