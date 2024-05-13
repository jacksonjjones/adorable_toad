import React from "react";
import onlineBookshelfImage from "../assets/onlineBookshelf.png"
import techBlogImage from "../assets/techBlog.png"
import fillMyBellyImage from "../assets/fillMyBelly.png"
import weatherDashboardImage from "../assets/weatherDashboard.png"
import jsQuizImage from "../assets/jsQuiz.png"
import workDaySchedulerImage from "../assets/workDayScheduler.png"
 

const projects = [
  {
    id: 0,
    title: "Online Bookshelf",
    image: onlineBookshelfImage,
    repo: "https://github.com/jacksonjjones/online_bookshelf",
    live: "https://online-bookshelf-3a41511a672a.herokuapp.com/",
  },
  {
    id: 1,
    title: "The Tech Blog",
    image: techBlogImage,
    repo: "https://github.com/jacksonjjones/exotic_butter",
    live: "https://exotic-butter-ae43edb28af4.herokuapp.com/",
  },
  {
    id: 2,
    title: "Fill My Belly",
    image: fillMyBellyImage, 
    live: "https://jacksonjjones.github.io/Fill_My_Belly/",
    repo: "https://github.com/jacksonjjones/Fill_My_Belly",
  },
  {
    id: 3,
    title: "Weather dashboard",
    image: weatherDashboardImage, 
    repo: "https://github.com/jacksonjjones/exciting_potato",
    live: "https://jacksonjjones.github.io/exciting_potato/",
  },
  {
    id: 4,
    title: "JavaScript Quiz",
    image: jsQuizImage, 
    repo: "https://github.com/jacksonjjones/functional_rock",
    live: "",
  },
  {
    id: 5,
    title: "Work Day Scheduler",
    image: workDaySchedulerImage, 
    repo: "https://github.com/jacksonjjones/amused_tree",
    live: "https://jacksonjjones.github.io/amused_tree/",
  },
];

function Portfolio() {
  return (
    <div>
      <div className="projectsHeader">
        <h2>My Projects</h2>
      </div>
      <div className="portfolio-container">
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="card-actual-image">
                    <a>
                      <img src={project.image || "https://via.placeholder.com/300"} alt={project.title} />
                    </a>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <div className="other-card-content">
                      <p className="title is-4">{project.title}</p>
                    </div>
                  </div>

                  </div>
                </div>
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
          
          ))}
        </div>
      </div>
    </div>
  );
}


export default Portfolio;
