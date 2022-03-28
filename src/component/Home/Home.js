import React from "react";
import "./Home.css";
import Caero from "../aboutus/Caerosel/Caero";
import Navbar from "../Navbar/Navbar";
import Cap from "./Capability";
import Late from "./latest_dev";
import About from "./Aboutus/index";
import Projects from "./personal_projects/projects";
import Last from "./last_second_section";
import Footer from "../Footer/footer";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <Caero />
        <div className="homemain">
          <Cap />
          <Late />
          <Late />
          <About />
          <Projects />
          <Last />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
