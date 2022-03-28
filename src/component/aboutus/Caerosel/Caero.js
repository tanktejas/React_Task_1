import React from "react";
import "./caro.css";

function Navbar() {
  return (
    <>
      <div class="carousel-container">
        <div class="carousel my-carousel carousel--translate">
          <input
            class="carousel__activator"
            type="radio"
            name="carousel"
            id="F"
            checked="checked"
          />
          <input
            class="carousel__activator"
            type="radio"
            name="carousel"
            id="G"
          />

          <div class="carousel__controls">
            <label
              class="carousel__control carousel__control--backward"
              for="J"
            ></label>
            <label
              class="carousel__control carousel__control--forward"
              for="G"
            ></label>
          </div>
          <div class="carousel__controls">
            <label
              class="carousel__control carousel__control--backward"
              for="F"
            ></label>
            <label
              class="carousel__control carousel__control--forward"
              for="H"
            ></label>
          </div>
          <div class="carousel__controls">
            <label
              class="carousel__control carousel__control--backward"
              for="G"
            ></label>
            <label
              class="carousel__control carousel__control--forward"
              for="I"
            ></label>
          </div>
          <div class="carousel__controls">
            <label
              class="carousel__control carousel__control--backward"
              for="H"
            ></label>
            <label
              class="carousel__control carousel__control--forward"
              for="J"
            ></label>
          </div>

          <div class="carousel__track">
            <li class="carousel__slide">
              <div className="a">
                <h1 className="h1">
                  Rsedefining innovation in a global supply chain
                </h1>
                <p>
                  lorem oidhsd sdiufgsdjfksdfvs sisudsdfhjsdf hs fyushjf
                  sufsbjhddfua sdjhbfv fhgf fyuf isdfv bf fgu ydf i
                </p>

                <button>Know More -></button>
              </div>
            </li>
            <li class="carousel__slide">
              <div className="a">
                <h1 className="h1">This is Second slide of Caerosel.</h1>
                <p>
                  lorem oidhsd sdiufgsdjfksdfvs sisudsdfhjsdf hs fyushjf
                  sufsbjhddfua sdjhbfv fhgf fyuf isdfv bf fgu ydf i
                </p>

                <button>Know More -></button>
              </div>
            </li>
          </div>
          <div class="carousel__indicators">
            <label class="carousel__indicator" for="F"></label>
            <label class="carousel__indicator" for="G"></label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
