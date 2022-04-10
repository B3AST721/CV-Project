import React, {Component} from "react";
import Heading from "./components/Heading";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import EducationalButton from "./components/EducationalButton";
import WorkExperience from "./components/WorkExperience";
import WorkButton from "./components/WorkButton";

function App() {
  return (
    <div className="App">
      <Heading />
      <GeneralInfo />
      <EducationalExperience />
      <EducationalButton />
      <WorkExperience />
      <WorkButton />
    </div>
  );
}

export default App;
