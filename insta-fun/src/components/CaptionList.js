import React from "react";

export default function CaptionList({ data }) {
  return <form>{data.forEach((element) => console.log(element))}</form>;
}
