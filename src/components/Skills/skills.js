import React from "react";
import "./skills.css";
import DataAnalytics from "../../assets/dataconcepts/business-report.png";
import DataScience from "../../assets/dataconcepts/data-science.png";
import DataModelling from "../../assets/dataconcepts/data-modelling.png";
import DataWrangling from "../../assets/dataconcepts/data-cleaning.png";
import DataEngineering from "../../assets/dataconcepts/data-transfer.png";
import MachineLearning from "../../assets/dataconcepts/predictive-chart.png";
import Azure from "../../assets/tools/azure.png";
import Excel from "../../assets/tools/excel.png";
import Gitlab from "../../assets/tools/gitlab.png";
import Git from "../../assets/tools/git.png";
import Keras from "../../assets/tools/keras.png";
import AWS from "../../assets/tools/aws.png";
import Office from "../../assets/tools/office.png";
import Pandas from "../../assets/tools/pandas.png";
import PowerBI from "../../assets/tools/powerbi.png";
import Powerpoint from "../../assets/tools/powerpoint.png";
import Python from "../../assets/tools/python.png";
import GCP from "../../assets/tools/gcp.png";
import SQL from "../../assets/tools/sql.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        I am an optimist and a problem solver with a proven track record of
        thriving in dynamic environments. I am well-equipped to tackle the
        challenges of a fast-evolving industry, actively embracing the latest
        trends and continually honing my skills through personal projects,
        learning from industry leading products, and my own training and
        development.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={DataAnalytics}
            alt="DataAnalytics"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Data Analytics</h2>
            <p>
              Interpret extensive datasets to extract valuable insights and
              facilitate informed decision-making in various contexts
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={DataScience} alt="DataScience" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Data Science</h2>
            <p>
              Employ advanced statistical and computational techniques to
              extract meaningful insights, solve complex problems, and
              contribute to data-driven decisions
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={DataModelling}
            alt="DataModelling"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Data Modelling</h2>
            <p>
              Design and structure data representations to enhance
              understanding, optimize storage and retrieval, and support
              effective analysis
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={DataWrangling}
            alt="DataWrangling"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Data Wrangling</h2>
            <p>
              Cleaning, transforming, and organizing raw and complex datasets
              into a more structured and usable format
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={DataEngineering}
            alt="DataEngineering"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Data Engineering</h2>
            <p>
              Design, construct, and maintain robust data architectures,
              pipelines, and infrastructure, ensuring the efficient and reliable
              flow of data
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={MachineLearning}
            alt="MachineLearning"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Machine Learning</h2>
            <p>
              Train and deploy models that enable systems to learn from data,
              make predictions, and continually improve performance
            </p>
          </div>
        </div>
      </div>
      <div>Tool Box</div>
      <div className="toolBoxes">
        <div className="toolBox">
          <img src={Azure} alt="Azure" className="toolBoxImg" />
        </div>
        <div className="toolBox">
          <img src={Excel} alt="Excel" className="toolBoxImg" />
        </div>
        <div className="toolBox">
          <img src={Gitlab} alt="Gitlab" className="toolBoxImg" />
        </div>
        <div className="toolBox">
          <img src={Git} alt="Git" className="toolBoxImg" />
        </div>
        <div className="toolBox">
          <img src={Office} alt="Office" className="toolBoxImg" />
        </div>
        <div className="toolBox">
          <img src={Pandas} alt="Pandas" className="toolBoxImg" />
        </div>
        <div className="toolBox">
          <img src={PowerBI} alt="PowerBI" className="toolBoxImg" />
        </div>
        <div className="toolBox">
          <img src={Powerpoint} alt="Powerpoint" className="toolBoxImg" />
        </div>
        <div className="toolBox">
          <img src={Python} alt="Python" className="toolBoxImg" />
        </div>
        <div className="toolBox">
          <img src={GCP} alt="GCP" className="toolBoxImg" />
        </div>
        <div className="toolBox">
          <img src={SQL} alt="SQL" className="toolBoxImg" />
        </div>
        <div className="toolBox">
          <img src={Keras} alt="Keras" className="toolBoxImg" />
        </div>
        <div className="toolBox">
          <img src={AWS} alt="AWS" className="toolBoxImg" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
