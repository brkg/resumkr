import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import ResumeSuggestion from "./ResumeSuggestion";

const skillsRef = [
  { value: "reactJS", label: "reactJS" },
  { value: "javascript", label: "javascript" },
  { value: "ExpressJS", label: "ExpressJS" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "PosteGreSQL", label: "PosteGreSQL" },
];

const options2 = [
  { value: "Experience", label: "Experience" },
  { value: "Education", label: "Education" },
];

const animatedComponents = makeAnimated();

export default function SidePanel(props) {
  const suggestedEntries = [];

  const suggestion = {
    entryName: "Amazon",
    dates: ["20-01-01", "20-06-01"],
    content:
      "sjifoseofisoi efjiosjioefj esiofg p[tyojpkgtj soiefj iosjf \n awdawdawdaw ad adw awd rter trtertert awdwdad \n awdawdawdaw ad adw awd awdwdad",
  };
  for (let i = 0; i < 5; i++)
    suggestedEntries.push(
      <ResumeSuggestion
        key={i}
        id={i}
        entryName={suggestion.entryName}
        dates={suggestion.dates}
        content={suggestion.content}
      />
    );

  return true ? (
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
            />
          </div>
        </div>
        <div className="entrySelection">
          <div className="selectTypeOfEntry">
            <Select placeholder="Select type of entry..." options={options2} />
          </div>
          <div className="entriesToSelect">{suggestedEntries}</div>
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
