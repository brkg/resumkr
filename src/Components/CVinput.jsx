import React, { useEffect, useState } from "react";

import CVentry from "./CVentry";

function CVinput(props) {
  const initialArray = [
    <CVentry key="0" />,
    <CVentry key="1" />,
    <CVentry key="2" />,
    <CVentry key="3" />,
    <CVentry key="4" />,
  ];
  const [rows, countRows] = useState([initialArray]);
  const [keyCount, counter] = useState(5);

  const addRow = () => {
    let tempRows = rows.slice();
    counter((keyCount) => (keyCount += 1));
    tempRows.push(<CVentry key={keyCount} />);
    return tempRows;
  };

  const submit = () => {
    fetch("/api/submit", {
      method: POST,
      headers: {
        "Content-Type": "Application/JSON",
      },
      // body: JSON.stringify()
    });
  };

  return props.trigger ? (
    <div id="signupContainer">
      <div id="labelAndInput">
        <input type="text" id="firstName" placeholder="Full Name"></input>
      </div>
      <div id="labelAndInput">
        <input type="text" id="lastName" placeholder="Job Title"></input>
      </div>
      <div id="labelAndInput">
        <input type="text" id="email" placeholder="Email"></input>
      </div>
      <div id="experienceRows">{rows}</div>
      <button id="addMoreExperiences" onClick={() => countRows(addRow)}>
        MORE ROWS
      </button>
      <button id="submit cv" onClick={submit}>
        SUBMIT
      </button>
    </div>
  ) : (
    ""
  );
}

export default CVinput;
