import React from 'react';
import {useState} from React;

function CVInput(props) {
  const submit = () => {

  }
  return (
    <div id='signupContainer'>
      <div id='signupContainerInner'>
        <div id='labelAndInput'>
          <label htmlFor='SIGNUP_username'>Username: </label>
          <input type='text' id='SIGNUP_username'></input> 
        </div>          
        <div id='labelAndInput'>
          <label htmlFor='SIGNUP_password'>Password: </label>
          <input type='password' id='SIGNUP_password'></input> 
        </div>
        <div id='labelAndInput'>
          <label htmlFor='SIGNUP_phone'>Phone: </label>
          <input type='password' id='SIGNUP_phone' onKeyDown={submit}></input>
        </div>
      </div>
      <button id='submitExperience'></button>
    </div>
    // false ? <h3>  </h3> : ""
  );
}

export default CVInput;