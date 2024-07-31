import React from "react";
import '../styles/semesterexchange.css'


function SemesterExc()
{
    return ( 
        <div className="container">
        <div className="section-introo">
          <h1 className="title">Semester Exchange Programs</h1>
          {/* <p className="intro">Discover opportunities to study abroad and immerse yourself in new cultures</p> */}
        </div>
  
        <div className="section">
          <h1 className="title">Incoming Exchange Programs</h1>
          <p className="intro">
          Welcome to the Incoming Exchange Program at IIIT-D! 
         
           We are excited to have you join us and look forward to supporting your academic
           and personal growth during your stay at IIIT-D.

          </p>
          <a href="/IncomingSemExc" className="program-link">Program Details</a>
        </div>
  
        <div className="section">
          <h1 className="title">Outgoing Exchange Programs</h1>
          <p className="intro">
          Embark on a transformative journey with IIIT-D's Outgoing Exchange Program. 
           
          We encourage you to take this step towards broadening your horizons and 
          developing skills that will benefit your future career. 
          Let us support you in making the most of your international academic adventure.

          </p>
          <a href="/OutgoingSemExc" className="program-link">Program Details</a>
        </div>
      </div>
    );
}

export default SemesterExc