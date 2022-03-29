import React from "react";
import "./index.css";
import url from "../future/human.jpg";
function Future() {
  return (
    <>
      <div className="fut">
        <div className="leff">
          <h2>Unshering the future of artificial intelligence</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            pharetra vitae, dignissim sit euismod. Sed ornare non vitae
            consequat. Eget  diam eu, eu, sed odio. Consequat vulputate velit
            pellentesque consequat eu egestas venenatis. Accumsan, ut erat ipsum
            scelerisque quis. Quisque vitae, eu vulputate mi, varius id ut
            pharetra.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
            pharetra vitae, dignissim sit euismod. Sed ornare non vitae
            consequat. Eget diam eu, eu, sed odio. Consequat vulputate velit
            pellentesque consequat eu egestas venenatis. Accumsan, ut erat ipsum
            scelerisque quis. Quisque vitae, eu vulputate mi, varius id ut
            pharetra.
          </p>
        </div>
        <div className="righh">
          <img src={url}></img>
        </div>
      </div>
    </>
  );
}

export default Future;
