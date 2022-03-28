import React from "react";
import P_Card from "./projects_card";
import "./projects.css";
function Projects() {
  return (
    <>
      <div className="latestproj">
        <h2>Latest Projects</h2>
        <div className="allproj">
          <P_Card pname="Orange Power" />
          <P_Card pname="Home Automation system" />
          <P_Card pname="Utrac" />
          <P_Card pname="Temperature control" />
          <P_Card pname="AC Monitoring" />
          <P_Card pname="Smart Farm Monitor" />
          <P_Card pname="Energy Monitering Device" />
          <P_Card pname="AQM Device" />
        </div>
      </div>
    </>
  );
}

export default Projects;
