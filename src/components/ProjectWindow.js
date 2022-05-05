import React from "react";
// import DayPlanner from "../images/day_planner.jpg";
// import TechBlog from "../images/tech_blog_mvc.jpg";
// import Horiseon from "../images/horiseon_refractor.jpg";
// import RunBuddy from "../images/run-buddy.jpg";
// import BudgetTracker from "../images/budget_tracker_pwa.jpg";
// import { FaGithub } from "react-icons/fa";
import Project from "../components/Project";

export default function ProjectWindow() {
  return (
    // <section className="projects">
    /* <h2 className="project-head">Portfolio</h2> */
    <div className="projects">
      <Project
        img="../images/budget_tracker_pwa.jpg"
        alt="budget tracker pwa"
        name="Budget Tracker PWA"
        repo="https://github.com/wlowrimore/Vandy-bc-PWA-Budget-Tracker-Chlng-19-2022"
        description="description"
      />

      <Project
        img="../images/day_planner.jpg"
        // alt="day planner app"
        name="Day Planner App"
        repo="https://github.com/wlowrimore/vandy-bc-weeklyp-2022"
        description="description"
      />

      <Project
        img="../images/tech_blog_mvc.jpg"
        // alt="tech blog mvc"
        name="Tech Blog MVC"
        repo="https://github.com/wlowrimore/Vandy-bc-2022-MVC-Tech-Blog-Chlng-14"
        descsription="description"
      />

      <Project
        img="../images/run-buddy.jpg"
        // alt="run buddy website"
        name="Run Buddy"
        repo="https://github.com/wlowrimore/Run-Buddy"
        description="description"
      />

      <Project
        img="../images/horiseon_refractor.jpg"
        // alt="horiseon refractor"
        name="Horiseon SEO"
        repo="https://github.com/wlowrimore/vu-bc-12-2021-horiseon"
        description="description"
      />
    </div>
    // </section>
  );
}

// <section className="project-display">
//   <h2 className="project-head">Portfolio</h2>
//   <div className="project">
//     <img src={DayPlanner} className="card-img-top" alt="Day Planner App" />
//     <div className="project-body">
//       <h5 className="project-title">Day Planner App</h5>
//       <p className="project-text">
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </p>
//     </div>
//   </div>

//   <div className="project">
//     <img
//       src={BudgetTracker}
//       className="card-img-top"
//       alt="Budget Tracker PWA"
//     />
//     <div className="project-body">
//       <h5 className="project-title">Budget Tracker</h5>
//       <p className="project-text">
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </p>
//     </div>
//   </div>

//   <div className="project">
//     <img
//       src={TechBlog}
//       className="card-img-top"
//       width={500}
//       alt="Tech Blog"
//     />
//     <div className="project-body">
//       <h5 className="project-title">Tech Blog MVC</h5>
//       <p className="project-text">
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </p>
//     </div>
//   </div>

//   <div className="project">
//     <img
//       src={RunBuddy}
//       className="card-img-top"
//       width={250}
//       alt="Run Buddy Website"
//     />
//     <div className="project-body">
//       <h5 className="project-title">Run Buddy</h5>
//       <p className="project-text">
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </p>
//     </div>
//   </div>

//   <div className="project">
//     <img
//       src={Horiseon}
//       className="card-img-top"
//       alt="Horiseon SEO Website"
//     />
//     <div className="project-body">
//       <h5 className="project-title">Horiseon</h5>
//       <p className="project-text">
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </p>
//     </div>
//   </div>
// </section>
