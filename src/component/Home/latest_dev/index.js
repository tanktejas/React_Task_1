import React from "react";
import "./index.css";
import url from "./image.jpg";

function Late() {
  return (
    <>
      <div className="latesthome">
        <div className="up">
          <h2>Latest Developments</h2>
          <p>We build vital systems to deliver outcomes.</p>
        </div>
        <div className="down">
          <div className="left2">
            <h2>Performance monitoring for</h2>
            <h2 className="orange">Critical Infrastructure</h2>
            <p>
              Short description of the work we are show casing. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Eu integer sit
              sollicitudin ipsum in ornare. Cursus ut enim interdum integer
              elit.
            </p>
            <button>Know More </button>
          </div>
          <div className="right2">
            <img src={url}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Late;
