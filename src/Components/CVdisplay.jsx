import React from "react";

const Title = (title, list) => {
  return (
    <div className="sectionTitle">
      <div className="leftTitle">
        <hr></hr>
      </div>
      <div className="textTitle">{title}</div>
      <div className="rightTitle">
        <hr></hr>
      </div>
    </div>
  );
};

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
