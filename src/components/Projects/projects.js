import React from "react";
import "./projects.css";
import Project1 from "../../assets/dancers/1920s-dancing.png";
import Project2 from "../../assets/dancers/can-can.png";
import Project3 from "../../assets/dancers/country.png";
import Project4 from "../../assets/dancers/hip-hop.png";
import Project5 from "../../assets/dancers/hopak.png";
import Project6 from "../../assets/dancers/kathak.png";
import Project7 from "../../assets/dancers/tango.png";
import Project8 from "../../assets/dancers/waltz.png";
import Project9 from "../../assets/dancers/shuffle.png";

const Projects = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDescription">
        With a commitment to excellence, I bring a unique blend of technical
        expertise and collaborative skills to deliver imaginative solutions to
        the most difficult problems.
      </span>
      <div className="worksImgs">
        <div className="worksCard card1">
          Hospital Wait-times
          <img src={Project1} alt="Project1" className="worksImg" />
        </div>
        <div className="worksCard card2">
          Movies, Movies, Movies
          <img src={Project2} alt="Project2" className="worksImg" />
        </div>
        <div className="worksCard card3">
          Stocks and Crypto
          <img src={Project3} alt="Project3" className="worksImg" />
        </div>
        <div className="worksCard card4">
          Diabetes Predictor
          <img src={Project4} alt="Project4" className="worksImg" />
        </div>
        <div className="worksCard card5">
          AI Pong
          <img src={Project5} alt="Project5" className="worksImg" />
        </div>
        <div className="worksCard card6">
          More...
          <img src={Project6} alt="Project6" className="worksImg" />
        </div>
      </div>
      <button className="worksButton">See More</button>
    </section>
  );
};

export default Projects;
