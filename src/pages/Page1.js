import React from "react";
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Page1 = () => {
  return (
    <section className="page-content">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol>
            <h1>Page 1 content</h1>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default withRouter(Page1);
