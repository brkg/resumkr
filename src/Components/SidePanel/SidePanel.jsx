import React, { Component, useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ResumeSuggestion from "./ResumeSuggestion";

const skillsRef = [
  { value: "reactJS", label: "reactJS" },
  { value: "javascript", label: "javascript" },
  { value: "ExpressJS", label: "ExpressJS" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "PosteGreSQL", label: "PosteGreSQL" },
  { value: "Python", label: "Python" },
  { value: "Procedures", label: "Procedures" },
  { value: "C++", label: "C++" },
  { value: "Java", label: "Java" },
  { value: "Database", label: "Database" },
  { value: "GIT", label: "GIT" },
  { value: "Linux", label: "Linux" },
  { value: "Web Services", label: "Web Services" },
  { value: "API", label: "API" },
  { value: "Jenkins", label: "Jenkins" },
  { value: "CSS", label: "CSS" },
  { value: "Scrum", label: "Scrum" },
  { value: "Vue", label: "Vue" },
  { value: "Go", label: "Go" },
  { value: "Ruby", label: "Ruby" },
  { value: "C", label: "C" },
  { value: "C#", label: "C#" },
];

// const options2 = [
//   { value: "Experience", label: "Experience" },
//   { value: "Education", label: "Education" },
// ];

const animatedComponents = makeAnimated();

export default function SidePanel(props) {
  const [suggestions, updateSuggestions] = useState([]);
  const [selectedSkills, updateSelectedSkills] = useState([]);

  // const skillsRef = props.resume.skills;

  function onChangeInput(value) {
    const newSkillSelection = [];
    for (let i = 0; i < value.length; i++) {
      console.log(value[i].value);
      newSkillSelection.push(value[i].value);
    }
    console.log(props.resume);
    updateSelectedSkills(newSkillSelection);
    const newSuggestions = [];
    for (let i = 0; i < props.resume.suggestedjobs.length; i++) {
      console.log(newSkillSelection);
      console.log(props.resume.suggestedjobs[i].skills);

      if (
        newSkillSelection.some((el) =>
          props.resume.suggestedjobs[i].skills.includes(el)
        )
      ) {
        newSuggestions.push(
          <ResumeSuggestion
            key={i}
            id={i}
            entryName={props.resume.suggestedjobs[i].entryName}
            dates={props.resume.suggestedjobs[i].dates}
            content={props.resume.suggestedjobs[i].content}
            addToResume={props.addToResume}
            hideSuggestion={props.hideSuggestion}
          />
        );
      }
    }
    console.log(newSuggestions);
    updateSuggestions(newSuggestions);
  }

  return props.trigger ? (
    <div className="sidePanel">
      <div className="sidePanelMain">
        <div className="line" id="sidePanelTop">
          <h1> Resume Generator </h1>
          <button
            id="sidePanelToggle"
            onClick={() => props.setTrigger(false)}
            className="sidePanelToggle"
          >
            X
          </button>
        </div>
        <div className="line">
          <div className="TechnologySelect">
            <Select
              closeMenuOnSelect={false}
              placeholder="Select Technologies..."
              components={animatedComponents}
              // defaultValue={["one", "two"]}
              isMulti
              options={skillsRef}
              onChange={onChangeInput}
            />
          </div>
        </div>
        <div className="entrySelection">
          {/* <div className="selectTypeOfEntry">
            <Select placeholder="Select type of entry..." options={options2} />
          </div> */}
          <div className="entriesToSelect">{suggestions}</div>
        </div>
      </div>

      <div className="bottomLine">
        <button className="exportPDF">Export as PDF</button>
        <button className="exportDOCX">Export as DOCX</button>
      </div>
    </div>
  ) : (
    ""
  );
}
