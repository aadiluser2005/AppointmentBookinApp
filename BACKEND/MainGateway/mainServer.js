import express from "express"
import expressProxy from "express-http-proxy"
import dotenv from "dotenv";
import cors from "cors"; 
dotenv.config();
const PORT=process.env.PORT||5000;


 const app=express();

 app.use(cors({
     origin:[`${process.env.FRONTEND_URL}`,`${process.env.DASHBOARD_URL}`],
     credentials: true 
 }));
 

 app.get("/health", (req, res) => {
  res.status(200).send("OK");
});


 // Log every request
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next(); // important to pass control to next middleware/route
});

// Appointment Service routes
app.use("/api/v1/appointmentService", expressProxy(process.env.APPOINTMENT_URL,{
    proxyErrorHandler(err,res,next){
          res.status(500).json({ message: "Appointment service unavailable" });
    }
}));


// User Service routes
app.use("/api/v1/userService", expressProxy(process.env.USER_URL,{
    proxyErrorHandler(err,res,next){
          res.status(500).json({ message: "User service unavailable" });
    }
}));

app.use("/api/v1/adminService", expressProxy(process.env.ADMIN_URL,{
    proxyErrorHandler(err,res,next){
          res.status(500).json({ message: "Admin service unavailable" });
    }
}));


 app.listen(PORT,()=>{
    console.log(`Gateway is running on port ${PORT}`);
 })