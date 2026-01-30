import { Router } from "express";
import { book,update,deleteAppointment,readAppointment,readPastAppointment } from "../controllers/appointment.controller.js";

export const appointmentRoutes=Router();


appointmentRoutes.route("/book").post(book);
appointmentRoutes.route("/update").post(update);
appointmentRoutes.route("/delete").post(deleteAppointment);
appointmentRoutes.route("/upcomingAppointments").get(readAppointment);
appointmentRoutes.route("/pastAppointments").get(readPastAppointment);
