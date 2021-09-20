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
        <button className="add" onClick={() => props.addToResume(addJob)}>
          +
        </button>
        <button className="hide" onClick={() => props.hideSuggestion(props.id)}>
          -
        </button>
      </div>
    </div>
  );
}
