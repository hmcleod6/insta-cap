import { captions } from "../api";
import React, { useState } from "react";
import "./Caption.css";
import CaptionList from "./CaptionList";

export default function Caption() {
  const [caption, setCaption] = useState([]);
  const [photo, setPhoto] = useState("");

  const handleCaption = (e) => {
    setPhoto(e.target.value);
  };

  const onSearch = () => {
    captions({ photo }).then((response) => {
      setCaption([response.captions]);
    });
  };

  return (
    <div className="Background">
      <div className="search-box">
        <div className="mb-3">
          <input
            type="text"
            id="caption"
            className="form-control me-4"
            placeholder="what are you posting?"
            onChange={handleCaption}
            required
          />
        </div>
        <button
          type="button"
          className="button"
          onClick={() => {
            onSearch();
          }}
        >
          cap
        </button>
      </div>
      <div>
        <CaptionList data={caption} />
      </div>
    </div>
  );
}
