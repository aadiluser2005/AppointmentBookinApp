import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container-fluid hero ">
      <div className="row">
        <div className=" col-12 hero p-5 d-flex flex-column heroHeadings">
          <div className="trust mb-3">Trusted by 500+ patients</div>
          <h1 className="fs-1 fw-bold  heroHeading1">Quality Dialysis Care</h1>
          <h1 className=" fs-1 fw-bold heroHeading2">When You Need It</h1>
          <div className="">
            <p className="p-3 fs-4 fw-normal text-muted mt-3">
            Schedule your dialysis sessions with ease. Our state-of-the-art
            facility <br /> and expert care team ensure you receive the highest quality
            treatment <br /> in a comfortable environment.
          </p>
          </div>
          <div className="herobtns mb-5">
            <Link to={"/book"}><button className="heroBtn1 fs-5 "><i className="fa-regular fa-calendar me-2"></i>Book Appointment</button></Link>
            <Link to={"/booking"}> <button className="heroBtn2 fs-5"><i class="fa-regular fa-clock me-2"></i>View My Bookings</button></Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
