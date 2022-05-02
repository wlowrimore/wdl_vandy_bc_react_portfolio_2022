import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container-fluid text-center footer">
      <div className="impressum row-xs-12 row-sm-4 row-sm-pull-6">
        <p className="navbar-text">Thank You For Visiting My Portfolio!</p>
      </div>

      <ul className="row justify-content-center">
        <li className="row-xs-6 row-sm-2">
          <h2>
            <a
              href="https://github.com/wlowrimore"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub></FaGithub>
            </a>
          </h2>
        </li>
        <li className="row-xs-6 row-sm-2">
          <h2>
            <a
              href="https://linkedin.com/in/william-lowrimore-21778310"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin></FaLinkedin>
            </a>
          </h2>
        </li>
        <li className="row-xs-6 row-sm-2">
          <h2>
            <a
              href="https://facebook.com/will.lowrimore"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook></FaFacebook>
            </a>
          </h2>
        </li>
      </ul>

      <div className="copyright row-xs-12 row-sm-3 row-sm-pull-6">
        <p className="navbar-text"> &copy; William Lowrimore 2022 </p>
      </div>
    </footer>
  );
}
