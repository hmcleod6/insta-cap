import React from "react";
import "./CaptionList.css";

export default function CaptionList({ data }) {
  // const arrayLength = data[0].length;
  // const randomCaptionNumber = Math.floor(Math.random() * arrayLength);
  console.log(data[0]);

  return (
    <form>
      <div className="random-caption">{data[0][0]}</div>
    </form>
  );
}
