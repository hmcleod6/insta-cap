import { captions } from "../api";
import React, { useState } from "react";

function Caption() {
  const [caption, setCaption] = useState();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSearch = () => {
    captions({ words: inputs.words }).then((response) => {
      console.log({ response });
      setCaption(response.data);
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
            placeholder="photo subject"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={() => {
            onSearch();
          }}
        ></button>
      </div>
      <div>{caption}</div>
    </div>
  );
}

export default Caption;
