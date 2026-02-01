import express from "express"
import dotenv from "dotenv";
import { notificationConsumer } from "./NotificationConsumer.js";
dotenv.config();
const app=express();
const PORT=process.env.PORT||5003;



notificationConsumer();

// const appointment={
//   patientName: 'Pankaj agarwal ',
//   phoneNumber: 9554546812,
//   email: 'mkhopedialysisunit@gmail.com',
//   emergencyContact: '1235544455',
//   appointmentDate: '2025-10-31T00:00:00.000Z',
//   bookedBy: '68ff901a6051f6a0f31bfb39',
//   dateBooked: '2025-10-27T15:31:35.306Z',
//   slotNumber: 1,
//   spot: 2,
//   uniqueID: '0gkdJexKAs481Z_OccpJ6',
//   _id: '68ff905738c4593ba5bc8edc',
//   __v: 0
// }

// console.log(new Date(appointment.dateBooked).toUTCString().slice(5,16));


app.listen(PORT,()=>{
    console.log(`Notification Service is running on Port ${PORT}......`);
})