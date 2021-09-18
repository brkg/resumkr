import React, { Component } from "react";
import LoginSignUp from "./Components/LoginSignUp";
import CVdisplay from "./Components/CVdisplay";
import CVinput from "./Components/CVinput";
import SidePanel from "./Components/SidePanel";
import { useState } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="page">
      <LoginSignUp trigger={buttonPopup} setTrigger={setButtonPopup} />
      <SidePanel />
      <CVinput />
      <CVdisplay />
      <button onClick={() => setButtonPopup(true)} className="Login/SignUp">
        Login/SignUp
      </button>
    </div>
  );
}

export default App;
