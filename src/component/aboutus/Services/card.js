import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";

function Card(props) {
  return (
    <>
      <div className="card">
        <p>
          <AcUnitIcon />
        </p>
        <h2>{props.title}</h2> 
        <p>{props.desc}</p>
        <p> 
          <button>Know More &#8594;</button>
        </p>
      </div>
    </>
  );
}

export default Card;
