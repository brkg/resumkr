import React from "react";

function CVdisplay(props) {
  return true ? (
    <div className="cvDisplay">
      <h3> CVdisplay </h3>
      <div className="cvBackground"></div>
    </div>
  ) : (
    ""
  );
}

export default CVdisplay;
