import React from 'react';

function CVentry(props){
  return (
  <div className='experience' id={props.id}>
    <div id = 'top'>
      <input id='company' placeholder='Codesmith'></input>
      <input id='title' placeholder='Software Engineer'></input>
      <input type="number" min="1900" max="2021" step="1" placeholder='FROM year' />
      <input type="number" min="1900" max="2021" step="1" placeholder='TO year' />
    </div>
    <textarea id='expDesc'></textarea>
    <textarea id='skillsArea'></textarea>
  </div>
  );
}

export default CVentry;