import React from 'react';

function CVentry(props){
  return (
  <div id='experience'>
    <div id = 'top'>
      <input id='title' placeholder='Title (e.g. Software Engineer)'></input>
      <input type="number" min="1900" max="2021" step="1" placeholder='FROM year' />
      <input type="number" min="1900" max="2021" step="1" placeholder='TO year' />
    </div>
    <textarea id='expDesc'></textarea>
    <textarea id='skillsArea'></textarea>
  </div>
  );
}

export default CVentry;