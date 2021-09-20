import React, { Component } from "react";
import LoginSignUp from "./Components/LoginSignUp";
import CVdisplay from "./Components/CVdisplay";
import CVinput from "./Components/CVinput";
import SidePanel from "./Components/SidePanel/SidePanel";
import { useState } from "react";
const axios = require("axios").default;

const initialState = {
  fullName: "",
  education: "", //stringify before sending to backend, parse when received
  jobs: [],
  skills: [],
};

// const signInOauth = () => {
//   console.log("signup", inputs);
//   //Add Asynchronicity
//   //here goes a function to submit a signup[POST] fetch request to the backend
//   //await will need to be used before doing anything as we need to ensure the signup information is valid before proceeding..
//   //one of the last functionnality will be props.setTrigger(false) to close the popup
// };

function App() {
  const [loginPopup, setLoginPopup] = useState(true);
  const [cvInputPage, setCvInputPage] = useState(false);
  const [cvDisplayPage, setcvDisplayPage] = useState(false);
  const [sidePanelPopup, setSidePanelPopup] = useState(false);

  async function login(inputs) {
    try {
      // const result = await axios.get("/api/auth", {
      //   body: { username, password },
      // });
      console.log("login", inputs);
      // if(!result.cv)
    } catch (error) {
      console.log(error);
    }
  }

  async function signup(inputs) {
    try {
      // const result = await axios.post("/api/auth", { body: { inputs } });
      console.log("signup", inputs);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="page">
      <div className="cvDisplayOuter">
        <CVdisplay trigger={cvDisplayPage} setTrigger={setcvDisplayPage} />
      </div>
      <LoginSignUp
        trigger={loginPopup}
        setTrigger={setLoginPopup}
        signup={signup}
        login={login}
      />
      <CVinput trigger={cvInputPage} setTrigger={setCvInputPage} />
      <SidePanel trigger={sidePanelPopup} setTrigger={setSidePanelPopup} />
      {/* <button onClick={() => setLoginPopup(true)} className="Login/SignUpBtn">
        Login/SignUp
      </button>
      <button onClick={() => setCvInputPage(true)} className="CVinput">
        CVinput
      </button>
      <button onClick={() => setcvDisplayPage(true)} className="CVdetails">
        CVdetails
      </button>
      <button onClick={() => setSidePanelPopup(true)} className="SidePanelBtn">
        SidePanel
      </button> */}
    </div>
  );
}

export default App;
