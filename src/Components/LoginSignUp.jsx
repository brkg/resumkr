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

  const login = () => {
    console.log("login", inputs);
  };
  const signup = () => {
    console.log("signup", inputs);
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
