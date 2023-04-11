import React from "react";

export default function Title(props) {
  return (
    <div className="title">
      <div className="title__container">
        <h2>{props.content}</h2>
      </div>
    </div>
  );
}
