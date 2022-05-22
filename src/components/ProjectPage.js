import React from "react";
import Project from "./Project";

export default function ProjectPage() {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
        <Project
          image={require("../images/budget_tracker_pwa.jpg")}
          name="Budget Tracker PWA"
          repo="https://github.com/wlowrimore/Vandy-bc-PWA-Budget-Tracker-Chlng-19-2022"
          live="https://tranquil-shore-61237.herokuapp.com/"
          description="This is a Progressive Web Application (PWA) that tracks a user's budget.
          It has offline use capabilities that will save/cache the user's budget input information,
          and retrieve it when internet connectivity is detected. This process is made possible by 
          the use of a 'service worker' and a local storage in an IndexedDB."
        />

        <Project
          image={require("../images/day_planner.jpg")}
          name="Day Planner App"
          repo="https://github.com/wlowrimore/vandy-bc-weeklyp-2022"
          live="https://wlowrimore.github.io/vandy-bc-weeklyp-2022/"
          description="This App was built using HTML, CSS and JavaScript. The use of third-party
          APIs (such as) moment.js, font awesome, bootsrap, etc. not only resulted in a much more 
          interactive site, but also, provided a much more visual appeal. JQuery is a key
          element in the base code of the javaScript, providing a library of cool 'shortcuts' which kept
          the code neat, clean, and minimal. The Day Planner App is a fully functioning hourly planner
          that recognizes time slots, and tracks the current time of day to assign a reference of the
          past, present and future times. Each pretense is assigned a color code. These color codes
          change according to real time. All tasks are stored in local storage so they can be accesssed
          even after the page has been closed and reopened, or simply refreshed. The date at the head
          of the document is also displayed in real time, so the date will change in real time, as well."
        />

        <Project
          image={require("../images/tech_blog_mvc.jpg")}
          name="Tech Blog MVC"
          repo="https://github.com/wlowrimore/Vandy-bc-2022-MVC-Tech-Blog-Chlng-14"
          live="https://serene-springs-59438.herokuapp.com/"
          description="This is a full-stack Model View Controller (MVC) application that was created in
          the form of a blog. Once the user is logged in, they will experience the joy of Creating, Reading,
          Updating, and Deleting posts. If the user is new to the blog, and doesn't have login credentials,
          they can easily sign up. Their newly created username, email, and password will be saved, and they
          will be free to participate. However, the user had best keep moving! The session is timed, and
          after 2 minutes of idle time, the user is automatically signed out and must sign back in to 
          continue. Each post can receive comments from other users, and displays the posts' username 
          and timestamp of the date the post was created."
        />

        <Project
          image={require("../images/pizza_hunt.jpg")}
          name="Pizza Hunt MVC"
          repo="https://github.com/wlowrimore/pizza-hunt"
          live="https://pacific-ravine-27277.herokuapp.com/"
          description="Pizza Hunt is a social media recipe app where users can create custom pizzas, add
          comments to recipes, and create threads within those comments. The front-end for Pizza Hunt was
          provided, and my task was to add back-end functionality to it. This app uses MongoDB, a document-based
          NoSQL database, and Mongoose, an Object-Document Mapper, to work with unstructured data. IndexedDB,
          a NoSQL client-side storage API in the browser, was used in this application."
        />

        <Project
          image={require("../images/horiseon_refractor.jpg")}
          name="Horiseon SEO"
          repo="https://github.com/wlowrimore/vu-bc-12-2021-horiseon"
          live="https://wlowrimore.github.io/vu-bc-12-2021-horiseon/"
          description="The Horiseon site was provided with a code base that needed to be refractored in order
          to be more accessible. I uptdated the code to a more semantic HTML scripting. Also, I added alts
          to .jpg links, located and fixed any broken links, and organizing the code to insure a cognitive flow 
          while navigating and reading. Consolidating CSS elements and properties to create an even distribution
          for ease of access. Organizing CSS as such to reflect the HTML flow. Descriptive comments were added to, 
          both, HTML and CSS for location clarity. I created a README.md which contains TITLE, DESCRIPTION, 
          SCREENSHOT and LINKS. All code is clean and organized, and follows the 'SCOUT RULE'."
        />

        <Project
          image={require("../images/weather-dash.jpg")}
          name="Weather Dashboard"
          repo="https://github.com/wlowrimore/vandy_bc_weather_dash_chlng_06_2022"
          live="https://wlowrimore.github.io/vandy_bc_weather_dash_chlng_06_2022/"
          description="The Weather Dashboard is an app that returns requested weather data from a Third-Party API
          ( http://openweathermap.com ). The user searches for a city by city name. The current weather and 5-day
          forecast for that city are then returned to a polished, mobile friendly UI. Included in the data are: 
          Temperature, Windspeed, Humidity, and UV Index."
        />
      </div>{" "}
    </section>
  );
}
