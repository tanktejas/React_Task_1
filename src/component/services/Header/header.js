import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="headservices">
        <div className="upp">
          <h2>Artificial Intelligence Service</h2>
          <p>
            Harness the power of data and computing to serve your business
            needs.
          </p>
        </div>
        <div className="downn"></div>
      </div>
      <div className="sernav">
        <a>Overview</a>
        <a>Our Capabilities</a>
        <a>How we work</a>
      </div>
    </>
  );
}

export default Header;
