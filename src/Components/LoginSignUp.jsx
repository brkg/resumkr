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

  const inputs = {
    username,
    password,
  };

  const login = async () => {
    console.log("login", inputs);
    //here goes a function to submit a login[GET] fetch request to the backend
    //await will need to be used before doing anything as we need to ensure the login information is valid before proceeding.
    //one of the last functionnality will be props.setTrigger(false) to close the popup
  };
  const signup = async () => {
    console.log("signup", inputs);
    //here goes a function to submit a signup[POST] fetch request to the backend
    //await will need to be used before doing anything as we need to ensure the signup information is valid before proceeding..
    //one of the last functionnality will be props.setTrigger(false) to close the popup
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3> LoginSignUp </h3>
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
          <button className="Login" onClick={() => login()}>
            Login
          </button>
          <button className="Signup" onClick={() => signup()}>
            Signup
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
