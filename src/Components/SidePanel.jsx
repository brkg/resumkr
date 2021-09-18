import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const options = [
  { value: "reactJS", label: "reactJS" },
  { value: "javascript", label: "javascript" },
  { value: "ExpressJS", label: "ExpressJS" },
];

const animatedComponents = makeAnimated();

function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      // defaultValue={["one", "two"]}
      isMulti
      options={options}
    />
  );
}

export default function SidePanel(props) {
  return true ? (
    <div className="sidePanel">
      <div className="line" id="sidePanelTop">
        <h1> Resume Generation </h1>
        <button
          id="sidePanelToggle"
          onClick={() => props.setTrigger(false)}
          className="sidePanelToggle"
        >
          X
        </button>
      </div>
      <div className="line">
        <button id="addTech">+</button>
        <div className="techDisplay">
          <div className="tech">reactJS</div>
          <div className="tech">javascript</div>
          <div className="tech">node</div>
          <div className="tech">ExpressJS</div>
          <div className="tech">reactJS</div>
          <div className="tech">javascript</div>
          <div className="tech">node</div>
          <div className="tech">ExpressJS</div>
          <div className="tech">reactJS</div>
          <div className="tech">javascript</div>
          <div className="tech">node</div>
          <div className="tech">ExpressJS</div>
        </div>
      </div>
      <div className="line">
        <div className="entrySuggestionsContainer">
          <AnimatedMulti />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
