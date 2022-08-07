import React from "react";
import HeaderNav from "../header/navbar.page";
import SmallCentered from "../footer/footer.page";
import { Row, Col, Alert } from "reactstrap";

const PaymentCancel = () => {
  return (
    <>
      <HeaderNav />
      <>
        <div className="mt-5 mb-5 h-100">
          <Row>
            <Col sm="8" className="offset-2">
              <div class="card text-center">
                <div class="card-header">Payment Faild</div>
                <div class="card-body">
                  <h5 class="card-title">please check details and try again !</h5>
                  <Alert color="danger">
                    Hey! Your Payment has been Declined!.
                  </Alert>
                  <a href="/courses" class="btn btn-primary">
                    Goto Course 
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

export default PaymentCancel;
