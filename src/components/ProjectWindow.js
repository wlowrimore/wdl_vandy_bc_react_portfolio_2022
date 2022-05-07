import React from "react";
// import DayPlanner from "../images/day_planner.jpg";
// import TechBlog from "../images/tech_blog_mvc.jpg";
// import Horiseon from "../images/horiseon_refractor.jpg";
// import RunBuddy from "../images/run-buddy.jpg";
// import BudgetTracker from "../images/budget_tracker_pwa.jpg";
// import { FaGithub } from "react-icons/fa";
import Project from "./Project";

export default function ProjectWindow() {
  return (
    <section className="projects" id="portfolio">
      <h2 className="project-head">Portfolio</h2>
      <div className="projects">
        <Project
          image={require("../images/budget_tracker_pwa.jpg")}
          name="Budget Tracker PWA"
          repo="https://github.com/wlowrimore/Vandy-bc-PWA-Budget-Tracker-Chlng-19-2022"
          description="description"
        />

        <Project
          image={require("../images/day_planner.jpg")}
          name="Day Planner App"
          repo="https://github.com/wlowrimore/vandy-bc-weeklyp-2022"
          description="description"
        />

        <Project
          image={require("../images/tech_blog_mvc.jpg")}
          name="Tech Blog MVC"
          repo="https://github.com/wlowrimore/Vandy-bc-2022-MVC-Tech-Blog-Chlng-14"
          description="description"
        />

        <Project
          image={require("../images/pizza_hunt.jpg")}
          name="Pizza Hunt MVC"
          repo="https://github.com/wlowrimore/pizza-hunt"
          description="description"
        />

        <Project
          image={require("../images/horiseon_refractor.jpg")}
          name="Horiseon SEO"
          repo="https://github.com/wlowrimore/vu-bc-12-2021-horiseon"
          description="description"
        />

        <Project
          image={require("../images/1nceUponATime.jpg")}
          name="Once Upon A Time"
          repo="https://github.com/wlowrimore/vandy-pjct1-once-upon-a-time"
          description="description"
        />
      </div>{" "}
    </section>
  );
}
