import React from "react";

export default function LoginSignUp(props) {
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
            // value={username}
            // onChange={usernameOnChange}
          />
        </div>
        <div className="line">
          <label htmlFor="Password">Password</label>
          <input
            type="text"
            id="Password"
            name="Password"
            placeholder="Kang"
            // value={password}
            // onChange={passwordOnChange}
          />
        </div>
        <div className="line">
          <button className="Login">Login</button>
          <button className="Signup">Signup</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
