import React from "react";
import "./Projects.css";
import Project1 from "../../assets/dancers/1920s-dancing.png";
import Project2 from "../../assets/dancers/can-can.png";
import Project3 from "../../assets/dancers/country.png";
import Project4 from "../../assets/dancers/hip-hop.png";
import Project5 from "../../assets/dancers/hopak.png";
import Project6 from "../../assets/dancers/kathak.png";
import Project7 from "../../assets/dancers/tango.png";
import Project8 from "../../assets/dancers/waltz.png";
import Project9 from "../../assets/dancers/shuffle.png";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  let navigate = useNavigate();
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
          <a href="/diabetesProject">Diabetes Predictor</a>
          <p>
            In this project I clean a raw dataset of over 400 individuals and
            train and refine a linear regression model to predict if someone has
            diabetes based on pathology data
          </p>
          <div className="worksImgContainer">
            <img src={Project1} alt="Project1" className="worksImg" />
          </div>
        </div>
        <div className="worksCard card2">
          Project Name Here
          <img src={Project2} alt="Project2" className="worksImg" />
        </div>
        <div className="worksCard card3">
          Project Name Here
          <img src={Project3} alt="Project3" className="worksImg" />
        </div>
        <div className="worksCard card4">
          Project Name Here
          <img src={Project4} alt="Project4" className="worksImg" />
        </div>
        <div className="worksCard card5">
          Project Name Here
          <img src={Project5} alt="Project5" className="worksImg" />
        </div>
        <div className="worksCard card6">
          Project Name Here
          <img src={Project6} alt="Project6" className="worksImg" />
        </div>
        <div className="worksCard card7">
          Project Name Here
          <img src={Project7} alt="Project7" className="worksImg" />
        </div>
        <div className="worksCard card8">
          Project Name Here
          <img src={Project8} alt="Project8" className="worksImg" />
        </div>
        <div className="worksCard card9">
          Project Name Here
          <img src={Project9} alt="Project9" className="worksImg" />
        </div>
      </div>
      <button className="worksButton">See More</button>
    </section>
  );
};

export default Projects;
