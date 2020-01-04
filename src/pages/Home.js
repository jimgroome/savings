import React from "react";
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Home = () => {
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
