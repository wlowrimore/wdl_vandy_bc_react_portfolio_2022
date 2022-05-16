import React from "react";

const ResumePage = () => {
  return (
    <div className="resume" id="resume">
      <h1 className="resume-title">Resume</h1>

      <div className="resume-body">
        <header className="container-fluid resume-header">
          <h2>William Lowrimore</h2>
          <ul className="resume-contact-info">
            <li emailto="wlowrimore@gmail.com">wlowrimore@gmail.com</li>
            <li>901.568.7941</li>
            <a
              href="https://github.com/wlowrimore"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </ul>
        </header>

        <section className="objective">
          <h2>Objective</h2>
          <p>
            I am a current student of Vanderbilt University's Full Stack Coding
            Bootcamp. I will be a certified full stack developer with a focus on
            MERN stack when I graduate in May 2022. As I am becoming well-
            versed in languages from fron-end to back-end development, I do find
            front-end design and functionality to be where my intrest lies
            heavily. I am currently seeking employment where my front-end
            knowledge and skills will be utilized.
          </p>
        </section>

        <section className="education">
          <div className="section-titles">
            <h2>Education</h2>
            <h2>Certification of Full Stack Web Development</h2>
            <h2>Vanderbilt University Full Stack Coding Bootcamp, Nashville, TN 2021-2022</h2>
          </div>
          <ul>
            <li>3.3 GPA</li>
            <li>Completed a first quarter project building a front-end web app using third-party APIs and local storage</li>
            <li>Completed a second quarter project building a MVC using server-side JavaScript, RESTful APIs, databases, ORM, environment variables, templating, and authentication</li>
          </ul>
        </section>
        <br></br>
        <hr />
        <br></br>
      </div>
    </div>
  );
};
export default ResumePage;
