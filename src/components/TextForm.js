import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleEmailExClick = () => {
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

    const match = text.match(emailPattern);

    if (match) {
      setText(match.join(" "));
      props.showAlert("Email Extracted", "success");
    } else {
      setText("no email found");
      props.showAlert("No email Found", "danger");
    }

    //setText(text.match(emailPattern));
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "new test"; // wrong way to change the state
  //setText("new test"); // correct way to change the state

  return (
    <>
      <div className="container">
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${props.btnColor} m-2`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary m-2" onClick={handleEmailExClick}>
          Email Extractor
        </button>

        <button className="btn btn-danger m-2" onClick={handleClearClick}>
          clear
        </button>
      </div>

      <div className="container my-3"></div>
      <h2>Your Text Summary</h2>
      <p>
        {text.split(" ").length} words and {text.length} chracters
      </p>
      <p>{0.008 * text.split(" ").length} minutes read</p>

      <h2>Preview</h2>
      <p>
        {text.length > 0
          ? text
          : "enter something in text box above to preview here"}
      </p>
    </>
  );
}
