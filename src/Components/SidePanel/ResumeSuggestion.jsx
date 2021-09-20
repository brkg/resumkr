import React from "react";

export default function ResumeSuggestion(props) {
  return (
    <div className="suggestion">
      <div className="leftPart">
        <div className="entryName">{props.entryName}</div>
        <div className="suggDates">{`${props.dates[0]} \n ${props.dates[1]}`}</div>
      </div>
      <div className="content">{props.content}</div>
      <div className="actions">
        <button className="add" onClick={() => console.log("Add", props.id)}>
          +
        </button>
        <button className="hide" onClick={() => console.log("Hide", props.id)}>
          -
        </button>
      </div>
    </div>
  );
}
