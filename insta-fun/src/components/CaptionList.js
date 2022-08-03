import React from "react";
import "./CaptionList.css";

export default function CaptionList({ data }) {
  const arrayLength = data[0].length;
  const randomCaptionNumber = Math.floor(Math.random() * arrayLength);

  return (
    <form>
      <div className="random-caption">{data[0][randomCaptionNumber]}</div>
    </form>
  );
}
