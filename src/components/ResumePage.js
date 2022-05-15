import React from "react";

const ResumePage = () => {
  return (
    <div className="resume" id="resume">
      <h1 className="resume-title">Resume</h1>

      <div className="resume-body">
        <h2>William Lowrimore</h2>

        <ul className="resume-contact-info">
          <li emailto="wlowrimore@gmail.com">wlowrimore@gmail.com</li>
          <li>901.568.7941</li>
          <a href="https://github.com/wlowrimore" target="_blank" rel="noreferrer">Github</a>
        </ul>
        <br></br>
        <hr />
        <br></br>
      </div>
    </div>
  );
};
export default ResumePage;
