import React, { Component } from "react";
import LoginSignUp from "./Components/LoginSignUp";
import CVdisplay from "./Components/CVdisplay";
import CVinput from "./Components/CVinput";
import SidePanel from "./Components/SidePanel";
import { useState } from "react";

function App() {
  const [loginPopup, setLoginPopup] = useState(false);

  return (
    <div className="page">
      <LoginSignUp trigger={loginPopup} setTrigger={setLoginPopup} />
      <SidePanel />
      <CVinput />
      <CVdisplay />
      <button onClick={() => setLoginPopup(true)} className="Login/SignUp">
        Login/SignUp
      </button>
    </div>
  );
}

export default App;
