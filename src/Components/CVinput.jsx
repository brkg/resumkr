import React, { useEffect, useState } from 'react';

import ExperienceEntry from './ExperienceEntry';

function CVinput(props) {
  const initialArray = [
      <ExperienceEntry key='0' />,
      <ExperienceEntry key='1' />,
      <ExperienceEntry key='2' />,
      <ExperienceEntry key='3' />,
      <ExperienceEntry key='4' />
  ];
  const [rows, countRows] = useState([initialArray]);
  const [keyCount, counter] = useState(5);

  const addRow = () =>{
    let tempRows = rows.slice();
    counter(keyCount => keyCount += 1)
    tempRows.push(<ExperienceEntry key={keyCount}/>);
    return tempRows;
  }

  const submit = () =>{

  }
  
  return (
    props.trigger ? 
    <div id='signupContainer'>
      <div id='labelAndInput'>
        <input type='text' id='firstName' placeholder='Full Name'></input> 
      </div>          
      <div id='labelAndInput'>
        <input type='text' id='lastName' placeholder='Job Title'></input> 
      </div>
      <div id='labelAndInput'>
        <input type='text' id='email' placeholder = 'Email'></input>
      </div>
      <div id='experienceRows'>
        {rows}
      </div>
      <button id='addMoreExperiences' onClick={() => countRows(addRow)}></button>
    </div>
    : ""
  );
}

export default CVinput;
