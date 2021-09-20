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
      <div className="cvDisplayOuter">
        <CVdisplay trigger={cvDisplayPage} setTrigger={setcvDisplayPage} />
      </div>
      <LoginSignUp trigger={loginPopup} setTrigger={setLoginPopup} />
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
