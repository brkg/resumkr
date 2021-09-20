import React, { useEffect, useState } from "react";

import CVentry from "./CVentry";

const axios = require("axios").default;

function CVinput(props) {
  const job = {
    id: -1,
    company: '',
    title: '',
    years: '',
    desc: '',
    skills: ''
  }
  const initialArray = [
    <CVentry key="0" id="0" />,
    <CVentry key="1" id="1" />,
    <CVentry key="2" id="2" />,
    <CVentry key="3" id="3" />,
    <CVentry key="4" id="4" />,
  ];
  const infoArray = [
    {...job, id: 0},{...job, id: 1},{...job, id: 2},{...job, id: 3},{...job, id: 4}
  ]
  const [rows, countRows] = useState([initialArray]);
  const [keyCount, counter] = useState(5);

  const addRow = () => {
    let tempRows = rows.slice();
    counter((keyCount) => (keyCount += 1));
    tempRows.push(<CVentry key={keyCount} id={keyCount} />);
    infoArray.push({...job, id: keyCount});
    return tempRows;
  };

  const getAllJobInfo = () => {
    infoArray.forEach(ele => {
      let HTMLelement = document.getElementById(ele.id).children[0];
      ele.company = HTMLelement.firstChild.value;
      ele.title = HTMLelement.children[1].value;
      ele.years = `${HTMLelement.children[2].value.toString()} - ${HTMLelement.children[3].value.toString()}`
      ele.desc = HTMLelement.children[3].value;
    })
    return infoArray;
  }

  const submit = () => {
    const jobArray = getAllJobInfo();
    props.updateJobs({
      title: document.getElementById('title').value,
      jobs: jobArray
    });
     fetch("/api/submit", {
      method: POST,
       headers: {
         "Content-Type": "Application/JSON",
       },
      body: JSON.stringify()
     });
  };

  return props.trigger ? (
    <div id="entryContainer">
      <div id="labelAndInput">
        <input type="text" id="title" placeholder="Job Title"></input>
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
