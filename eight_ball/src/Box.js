// Import the react library
import React from "react";
// file with box styles
import "./Box.css";

/** Individual colored box. */
function Box(props) {
    // with return basically want to return any data in the div
  return (
    // div contains the main content of the Box component and returns a div element
    <div
    // className="Box" is for css styling purposes and it associates it with this div
      className="Box"
      style={{backgroundColor: props.color}}
    />
  );
}

export default Box;