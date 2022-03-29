import React from "react";
import "./services.css";
import Header from "./Header/header";
import Navbar from "../Navbar/Navbar";
import Future from "./future";
import Role from "./Role_of_inte";
import Footer from "../Footer/footer";

function Services() {
  return (
    <>
      <Navbar />
      <div className="mainservices">
        <Header />
        <Future />
        <Role />
      </div>

      <Footer />
    </>
  );
}

export default Services;
