import React from "react";
import Navbar from "../Navbar/Navbar";
import Caero from "./Caerosel/Caero";
import Overview from "./overview/index";
import "./about.css";
import Numbers from "./Numbers";
import Services from "./Services/service";
import Partners from "./Partners/partners";
import Section from "./Next_Sec/Next_sec";
import Footer from "../Footer/footer";

function About() {
  return (
    <>
      <Navbar />
      <Caero />
      <div className="main">
        <Overview />
        <Numbers />
        <Services />
        <Partners />
        <Section />
        <Footer />
      </div>
    </>
  );
}

export default About;
