import React from "react";
import "./footer.css";
import url from "../Navbar/logo.png";
function Footer() {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            <span>
              <img src={url}></img>
            </span>
            Labs
          </h3>

          <p class="footer-links">
            <a href="#">Think</a> <a href="#">Innovation</a>
          </p>

          <h2>Subscribe</h2>
          <p>Stay up-to-date with our latest insights</p>

          <div className="both">
            <input placeholder="Email Address"></input>
            <button>Submit</button>
          </div>
          <p className="reser">© 2021 Uniolabs. All Rights Reserved</p>
        </div>

        <div class="footer-right">
          <div className="navigat">
            <a>About Us</a>
            <a>Contact Us</a>
            <a>Cookie Policy</a>
            <a>Privacy Policy</a>
          </div>
          <div className="navigat">
            <a>Terms of Use</a>
            <a>Locate Us</a>
          </div>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
