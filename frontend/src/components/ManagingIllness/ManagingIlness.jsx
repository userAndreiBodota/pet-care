import React from "react";
import Header from "../Header/Header";
import Managing from "./Managing";
import Tips from "../Emergency/Tips";
import Footer from "../Footer/Footer";

const ManagingIllness = () => {
  return (
    <div>
      <Header />
      <Managing />
      <Tips />
      <Footer />
    </div>
  );
};

export default ManagingIllness;
