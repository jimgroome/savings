import React from "react";
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import days from "../helpers/savings";
const dateFormat = require("dateformat-light");

const Home = () => {
  const allDays = days();
  const currentDate = new Date();
  const getCurrentDay = () => {
    let currentDay = {};
    allDays.forEach(day => {
      if (day.current === true) {
        currentDay = day;
      }
    });
    return currentDay;
  };
  const currentDay = getCurrentDay();
  return (
    <section className="page-content">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol>
            <h1>
              {allDays.length} days of saving in{" "}
              {dateFormat(currentDate, "yyyy")}
            </h1>
            <h2>{currentDay.friendly.date}</h2>
            <p>
              Today we're banking {currentDay.friendly.increment}, which brings
              our total to {currentDay.friendly.totalSoFar}.
            </p>
            <p>
              This year, we're aiming for a total of{" "}
              {allDays[allDays.length - 1].friendly.totalSoFar}!
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default withRouter(Home);
