import { captions } from "../api";
import React, { useState } from "react";
import "./Caption.css";

function Caption() {
  const [caption, setCaption] = useState([]);
  const [photo, setPhoto] = useState("");

  const handleCaption = (e) => {
    setPhoto(e.target.value);
  };

  const onSearch = () => {
    captions({ photo }).then((response) => {
      console.log({ response });
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
      <div>{caption}</div>
    </div>
  );
}

export default Caption;
