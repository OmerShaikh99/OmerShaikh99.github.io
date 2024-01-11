import React from "react";
import { IpynbRenderer } from "react-ipynb-renderer";

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css";
// import ipynb file as json
import ipynb from "../../Raw/DiabetesAnalysis.json";

const DiabetesNotebook = () => {
  return <IpynbRenderer ipynb={ipynb} />;
};

export default DiabetesNotebook;
