import React from "react";
import Company from "./Copanycard.js";
import "./company.css";

function Partners() {
  return (
    <>
      <div className="Partners">
        <h2>Our Partners</h2>
        <div className="comp">
        <Company comapnyinfo="Company 1" />
        <Company comapnyinfo="Company 2" />
        <Company comapnyinfo="Company 3" />
        <Company comapnyinfo="Company 4" />
        <Company comapnyinfo="Company 5" />
        <Company comapnyinfo="Company 6" />
        <Company comapnyinfo="Company 7" />
        <Company comapnyinfo="Company 8" />
        <Company comapnyinfo="Company 9" />
        </div>
      </div>
    </>
  );
}

export default Partners;
