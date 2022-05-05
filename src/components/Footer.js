import React from "react";
import { FaGithub, FaLinkedin, FaSlack } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="line-position">
        <h5 className="navbar-text">
          Made with{" "}
          <img
            className="svg"
            src={require("../images/react.svg").default}
            href="https://iconscout.com/icons/react"
            target="_blank"
            alt="react"
          />{" "}
          React by William Lowrimore
        </h5>
      </div>

      <ul className="footer-icons">
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
              href="https://vuvirtbofsfpt-pjf3765.slack.com/app_redirect?channel=D02QTGL4KAQ"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaSlack></FaSlack>
            </a>
          </h2>
        </li>
      </ul>

      <div className="copyright row-xs-12 row-sm-3 row-sm-pull-6">
        <h5 className="navbar-text">
          {" "}
          &copy; All Rights Reserved William Lowrimore 2022{" "}
        </h5>
      </div>
    </footer>
  );
}
