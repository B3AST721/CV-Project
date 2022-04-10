import React, {Component} from "react";
import Heading from "./components/Heading";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import Button from "./components/Button";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className="App">
      <Heading />
      <GeneralInfo />
      <EducationalExperience />
      <Button />
      <WorkExperience />
    </div>
  );
}

export default App;
