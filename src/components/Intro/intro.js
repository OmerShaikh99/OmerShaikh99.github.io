import React from "react";
import "./intro.css";
import bg from "../../assets/profile.png";
import hireme from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Omer</span>
          <br /> Data Analyst
        </span>
        <p className="introPara">
          I am a skilled data analyst and with experience leveraging data to
          make better decisions for business. This website has been handcoded by
          me to showcase some of my projects. Additonal pages and links are
          currently under-contruction come back soon to see more!
        </p>
        <Link>
          <button className="btn">
            <img src={hireme} alt="Hire me" className="hiremeImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
