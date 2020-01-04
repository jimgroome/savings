import React from "react";
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import days from "../helpers/savings";

const Home = () => {
  const allDays = days();
  console.log(allDays);
  return (
    <section className="page-content">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol>
            <h1>Homepage content</h1>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default withRouter(Home);
