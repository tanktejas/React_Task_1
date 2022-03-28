import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import "./index.css";

function Cap() {
  return (
    <>
      <div className="cap">
        <div className="left1">
          <p className="orange">A RANGE OF</p>
          <h2>CAPABILITIES</h2>
          <p>
            Whether you need development and research services, specialist
            outsourcing, embedded systems services or consulting, we can get you
            the right mix of services that you need.
          </p>
          <button>Contect Us</button>
        </div>
        <div className="right1">
          <div className="logos">
            <div>
              <AcUnitIcon />
              <p>Artificial Intelligence</p>
            </div>
            <div>
              <AcUnitIcon />
              <p>embedded system</p>
            </div>
            <div>
              <AcUnitIcon />
              <p>internet of things</p>
            </div>
            <div>
              <AcUnitIcon />
              <p>product r&d</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cap;
