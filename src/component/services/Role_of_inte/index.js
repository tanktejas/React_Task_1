import React from "react";
import "./index.css";
import url from "./img.jpg";

function Role() {
  return (
    <>
      <div className="latesthome role">
        <div className="down">
          <div className="left2">
            <h2>
              Role of artificial intelligence in supercharging surveillance
            </h2>

            <p>
              Artificial intelligence is giving surveillance cameras digital
              brains to match their eyes, letting them analyze live video with
              no humans necessary. This could be good news for public safety,
              helping police and first responders more easily spot crimes and
              accidents and have a range of scientific and industrial
              applications
            </p>
            <button>Read More -></button>
          </div>
          <div className="right2">
            <img src={url}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Role;
