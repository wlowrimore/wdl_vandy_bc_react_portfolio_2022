import React from "react";
import Project from "./Project";

export default function ProjectPage() {
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
          image={require("../images/weather-dash.jpg")}
          name="Weather Dashboard"
          repo="https://github.com/wlowrimore/vandy_bc_weather_dash_chlng_06_2022"
          description="description"
        />
      </div>{" "}
    </section>
  );
}
