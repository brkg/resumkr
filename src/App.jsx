import React, { Component } from "react";
import LoginSignUp from "./Components/LoginSignUp";
import CVdisplay from "./Components/CVdisplay";
import CVinput from "./Components/CVinput";
import SidePanel from "./Components/SidePanel/SidePanel";
import { useState } from "react";

function App() {
  const [loginPopup, setLoginPopup] = useState(true);
  const [cvInputPage, setCvInputPage] = useState(false);
  const [cvDisplayPage, setcvDisplayPage] = useState(false);
  const [sidePanelPopup, setSidePanelPopup] = useState(false);

  return (
    <div className="page">
      <button onClick={() => setLoginPopup(true)} className="Login/SignUpBtn">
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
      </button>
      <LoginSignUp trigger={loginPopup} setTrigger={setLoginPopup} />
      <CVinput trigger={cvInputPage} setTrigger={setCvInputPage} />
      <CVdisplay trigger={cvDisplayPage} setTrigger={setcvDisplayPage} />
      <SidePanel trigger={sidePanelPopup} setTrigger={setSidePanelPopup} />
    </div>
  );
}

export default App;
