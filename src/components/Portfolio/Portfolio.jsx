import React from "react"; // Import React library
import onlineBookshelfImage from "../assets/onlineBookshelf.png"; // Import image for Online Bookshelf project
import techBlogImage from "../assets/techBlog.png"; // Import image for Tech Blog project
import fillMyBellyImage from "../assets/fillMyBelly.png"; // Import image for Fill My Belly project
import weatherDashboardImage from "../assets/weatherDashboard.png"; // Import image for Weather Dashboard project
import jsQuizImage from "../assets/jsQuiz.png"; // Import image for JavaScript Quiz project
import workDaySchedulerImage from "../assets/workDayScheduler.png"; // Import image for Work Day Scheduler project

// Define an array of project objects containing project details
const projects = [
  {
    id: 0,
    title: "Online Bookshelf",
    image: onlineBookshelfImage,
    repo: "https://github.com/jacksonjjones/online_bookshelf", // GitHub repository link
    live: "https://online-bookshelf-3a41511a672a.herokuapp.com/", // Live site link
  },
  {
    id: 1,
    title: "The Tech Blog",
    image: techBlogImage,
    repo: "https://github.com/jacksonjjones/exotic_butter", // GitHub repository link
    live: "https://exotic-butter-ae43edb28af4.herokuapp.com/", // Live site link
  },
  {
    id: 2,
    title: "Fill My Belly",
    image: fillMyBellyImage,
    live: "https://jacksonjjones.github.io/Fill_My_Belly/", // Live site link
    repo: "https://github.com/jacksonjjones/Fill_My_Belly", // GitHub repository link
  },
  {
    id: 3,
    title: "Weather Dashboard",
    image: weatherDashboardImage,
    repo: "https://github.com/jacksonjjones/exciting_potato", // GitHub repository link
    live: "https://jacksonjjones.github.io/exciting_potato/", // Live site link
  },
  {
    id: 4,
    title: "JavaScript Quiz",
    image: jsQuizImage,
    repo: "https://github.com/jacksonjjones/functional_rock", // GitHub repository link
    live: "", // Live site link (not available)
  },
  {
    id: 5,
    title: "Work Day Scheduler",
    image: workDaySchedulerImage,
    repo: "https://github.com/jacksonjjones/amused_tree", // GitHub repository link
    live: "https://jacksonjjones.github.io/amused_tree/", // Live site link
  },
];

// Define Portfolio component
function Portfolio() {
  return (
    <div>
      <div className="projectsHeader">
        <h2>My Projects</h2> {/* Display heading for projects section */}
      </div>
      <div className="portfolio-container">
        <div className="project-grid">
          {/* Map through projects array to render project cards */}
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="card-actual-image">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      {/* Display project image */}
                      <img
                        src={project.image || "https://via.placeholder.com/300"}
                        alt={project.title}
                      />
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <div className="other-card-content">
                      <p className="title is-4">{project.title}</p> {/* Display project title */}
                    </div>
                  </div>
                </div>
                {/* Display project footer with repository and live site links */}
                <footer className="card-footer">
                  <a
                    href={project.repo}
                    className="card-footer-item button-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo
                  </a>
                  <a
                    href={project.live}
                    className="card-footer-item button-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio; // Export Portfolio component
