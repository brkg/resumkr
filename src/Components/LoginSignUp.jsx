import React, { useState } from "react";

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

export default function LoginSignUp(props) {
  const [username, usernameOnChange] = useInput("");
  const [password, passwordOnChange] = useInput("");
  const [fullName, fullNameOnChange] = useInput("");

  const inputs = {
    username,
    password,
    fullName,
  };

  const login = () => {
    console.log("login", inputs);
    //Add Asynchronicity
    //here goes a function to submit a login[GET] fetch request to the backend
    //await will need to be used before doing anything as we need to ensure the login information is valid before proceeding.
    //one of the last functionnality will be props.setTrigger(false) to close the popup
  };
  const signup = () => {
    console.log("signup", inputs);
    //Add Asynchronicity
    //here goes a function to submit a signup[POST] fetch request to the backend
    //await will need to be used before doing anything as we need to ensure the signup information is valid before proceeding..
    //one of the last functionnality will be props.setTrigger(false) to close the popup
  };
  const signInOauth = () => {
    console.log("signup", inputs);
    //Add Asynchronicity
    //here goes a function to submit a signup[POST] fetch request to the backend
    //await will need to be used before doing anything as we need to ensure the signup information is valid before proceeding..
    //one of the last functionnality will be props.setTrigger(false) to close the popup
  };
  // props.trigger
  return props.trigger ? (
    <div className="LoginPopup">
      <div className="LoginPopup-inner">
        <h3> Authentication </h3>
        <button
          id="popupClose"
          onClick={() => props.setTrigger(false)}
          className="close-btn"
        >
          X
        </button>
        <div className="line">
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            id="Username"
            name="Username"
            placeholder="Banana"
            value={username}
            onChange={usernameOnChange}
          />
        </div>
        <div className="line">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Kang"
            value={password}
            onChange={passwordOnChange}
          />
        </div>
        <div className="line">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Banana King"
            value={fullName}
            onChange={fullNameOnChange}
          />
        </div>
        <div className="line">
          <button className="Signup" onClick={() => signup()}>
            SignUp
          </button>
          <button className="Login" onClick={() => login()}>
            LogIn
          </button>
          <button className="SignInWithOauth" onClick={() => signInOauth()}>
            Oauth
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
