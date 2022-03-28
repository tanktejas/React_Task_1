import React from "react";
import Card from "./card";
import "./service.css";
function Services() {
  return (
    <>
      <div className="mainservices">
        <h2 className="sss">Services we Provide</h2>
        <div className="Services">
          <Card
            img=""
            title="Artificial Intelligence"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, porro doloremque maiores totam in cum tempore impedit rerum dicta architecto aperiam quasi aspernatur non suscipit ut nostrum fuga magnam voluptas!"
          /> 
          <Card
            img=""
            title="Artificial Intelligence"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, porro doloremque maiores totam in cum tempore impedit rerum dicta architecto aperiam quasi aspernatur non suscipit ut nostrum fuga magnam voluptas!"
          />
          <Card
            img=""
            title="Artificial Intelligence"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, porro doloremque maiores totam in cum tempore impedit rerum dicta architecto aperiam quasi aspernatur non suscipit ut nostrum fuga magnam voluptas!"
          />
          <Card
            img=""
            title="Artificial Intelligence"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, porro doloremque maiores totam in cum tempore impedit rerum dicta architecto aperiam quasi aspernatur non suscipit ut nostrum fuga magnam voluptas!"
          />
        </div>
      </div>
    </>
  );
}

export default Services;
