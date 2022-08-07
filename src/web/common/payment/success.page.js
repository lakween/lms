import React from "react";
import HeaderNav from "../header/navbar.page";
import SmallCentered from "../footer/footer.page";
import { Row, Col, Alert } from "reactstrap";

const PaymentSuccess = () => {
  return (
    <>
      <HeaderNav />
      <>
        <div className="mt-5 mb-5 h-100">
          <Row>
            <Col sm="8" className="offset-2">
              <div class="card text-center">
                <div class="card-header">Payment Success</div>
                <div class="card-body">
                  <h5 class="card-title">
                  Congratulations your payment details verification compelete !
                  </h5>
                  <Alert color="success">
                    Hey! Your Payment has been Accepted.
                  </Alert>
                  <a href="/home" class="btn btn-primary">
                    Dashbord
                  </a>
                </div>
                <div class="card-footer text-muted">2 days ago</div>
              </div>
            </Col>
          </Row>
        </div>
        <SmallCentered />
      </>
    </>
  );
};

export default PaymentSuccess;
