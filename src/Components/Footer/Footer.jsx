import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import {
  FaAt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="website-information">
          <Logo />
          <p>
            Cookpal is a recipe website with a wide variety of delicious
            recipes, easy-to-use search function .join our community and let's
            cook together!
          </p>
        </div>
        <div className="website-parts">
          <ul>
            <h3>Company</h3>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/favorites"}>Favorites</Link>
            </li>
            <li>
              <a href="youtube.com">Team</a>
            </li>
            <li>
              <a href="youtube.com">About us</a>
            </li>
            <li>
              <a href="youtube.com">Activity</a>
            </li>
          </ul>
        </div>

        <div className="website-resources">
          <ul>
            <h3>Resources</h3>
            <li>
              <a href="youtube.com">Blog</a>
            </li>
            <li>
              <a href="youtube.com">Use Cases</a>
            </li>
            <li>
              <a href="youtube.com">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="website-contact">
          <Logo />
          <p>
            Ut risus mattis interdum faucibus. Facilisi purus accumsan aliquam.
          </p>
          <div className="website-email">
            <div className="email-input">
              <input type="text" placeholder="Your Email" />
              <span>
                <FaAt />
              </span>
            </div>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <ul>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaLinkedinIn />
          </li>
          <li>
            <FaFacebookF />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
