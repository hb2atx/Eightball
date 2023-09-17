import React, { useState } from "react";
import Box from "./Box";
import "./BoxesContainer.css";
import { choice } from "./helpers";


// Inside the BoxesContainer component a state variable called boxes and its corresponding update function,
// setBoxes are declared using the useState hook.
function BoxesContainer(props) {
    // The useState hook is used to manage state in functional components. It returns an array with
    // two elements: the current state(boxes) and a function(setBoxes) to update that state.
  const [boxes, setBoxes] = useState(
    // Array.from generates an array with props.numBoxes elements. Each element is created by invoking 
    // the choice function with props.allColors
    // props.boxes is the number of boxes we want to render
    // props.allColors is an array of colors to choose from.
    Array.from({ length: props.numBoxes }, () => choice(props.allColors))
  );

  /** On button click: pick random box, change to random color. */
  // This line defines a function called handleClick. Its an arrow functionthat takes 
  // an event object (evt) as its parameter.
  const handleClick = evt => {
    // Inside handleClick we declare a local variable idx and assign a random integer value.
    // Purpose of this code is to generate a random index (idx) within a specified range(0 to props.Boxes - 1)
    let idx = Math.floor(Math.random() * props.numBoxes);

    // this code is a way to update the boxes state in a React component
    // setBoxes function can accept a callback function as an arguement.
    setBoxes(boxes => {
        // creates a shallow copy of the current boxes state array. This is done to ensure that we dont directly mutate
        // the existing state.
      let boxCopy = [...boxes];
      // Updates the boxCopy array by assigning a new color to a specific index (idx) within the array.
      // This entire code is a way to update the boxes state in a React component.
      boxCopy[idx] = choice(props.allColors);
      return boxCopy;
    });
  };

  // 
  const boxComponents = boxes.map((color, i) => <Box key={i} color={color} />);

  return (
    <div>
      <section className="BoxesContainer">{boxComponents}</section>
      <button onClick={handleClick}>Change a Box</button>
    </div>
  );
}

BoxesContainer.defaultProps = {
  numBoxes: 16,
  allColors: [
    "Aqua",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "Chocolate",
    "DodgerBlue",
    "Lavender",
    "LawnGreen",
    "Peru",
    "Plum",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Yellow",
    "YellowGreen"
  ]
};

export default BoxesContainer;