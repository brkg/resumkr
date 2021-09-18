import React from "react";

export default function ResumeSuggestion(props) {
  return (
    <div className="suggestion">
      <div className="leftPart">
        <div className="entryName">{props.entryName}</div>
        <div className="dates">{`${props.dates[0]} \n ${props.dates[1]}`}</div>
      </div>
      <div className="content">{props.content}</div>
      <div className="actions">
        <button className="add">+</button>
        <button className="hide">-</button>
      </div>
    </div>
  );
}
