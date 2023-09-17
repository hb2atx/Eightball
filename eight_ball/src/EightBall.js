import React, { useState } from "react";
import "./EightBall.css";


// function name is choice and takes (arr) array its parameter
// essentially we want to generate a random number and floor it (round down)
// you are using the array of answers or questions as your number that you are randomly
// returning back. 
function choice(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}


// We are using 2 state variables msg and color and declaring these using useState
function EightBall(props) {
  // This an example of a React hook. msg will return an array where the first element represents the current state value
  // Second element is setMsg this is a function used to update the state. So setMsg can be used to change the value of 
  // msg when needed.
  const [msg, setMsg] = useState("Think of a Question.");
  // this line initializes another state variable, color, with an initial value of "black"
  const [color, setColor] = useState("black");

  // When the handleclick function is called due to a user click event
  // it selects a random message and color from the props.answers array using the choice
  // function. 
  function handleClick() {
    // choice is a function that returns an object with msg and color properties
    // inside the function we are calling another function choice and destructuring its return value
    // into msg and color.
    const { msg, color } = choice(props.answers);
    // the setMsg will update the state variable msg with the value obtained from the choice function.
    setMsg(msg);
    // Similiarly this line uses the setColor function to update the state variable
    // color with the coor value obtained from the choice function.
    setColor(color);
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      <b>{msg}</b>
    </div>
  );
}

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" }
  ]
};

export default EightBall;