import React from "react";
import Left from "./left";
import Right from "./right";
import "./Overview.css";

function Overview() {
  return (
    <>
      <p className="thumb">Overview</p>
      <div className="Overview">
        <Left />
        <Right />
      </div>
    </>
  );
}

export default Overview;
