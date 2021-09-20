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

  return false ? (
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
          <button className="Signup" onClick={() => props.signup(inputs)}>
            SignUp
          </button>
          <button className="Login" onClick={() => props.login(inputs)}>
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
