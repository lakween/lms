import React from "react";

import HeaderNav from "./common/header/navbar.page";
import SmallCentered from "./common/footer/footer.page";
import BasicUsage from "./common/component/payment.form";

const CoursePayment = () => {
  return (
    <>
      <>
        <HeaderNav />
      </>
   <BasicUsage />
      <>
        <SmallCentered />
      </>
    </>
  );
};

export default CoursePayment;
