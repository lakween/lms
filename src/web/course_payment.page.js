import React from "react";

import HeaderNav from "./common/header/navbar.page";
import SmallCentered from "./common/footer/footer.page";
import PaymentModal from "./common/component/payment.compo";

const CoursePayment = () => {

  return (
    <>
      <HeaderNav />

      <>
       <PaymentModal
       orderId = "0012"
       name = "Test Product"
       amount = "2000" />
      </>

      <>
        <SmallCentered />
      </>
    </>
  );
};

export default CoursePayment;
