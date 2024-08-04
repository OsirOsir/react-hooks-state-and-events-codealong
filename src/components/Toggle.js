// import React from "react";
// import React, { useState } from 'react';



// function Toggle() {

// const [isOff, setisOff] = useState(true);
// console.log( isOff);

// function handleClickbutton() {
//   setisOff((isOff) => !isOff)
// }

// const color = isOff ? "White" : "Red";


//   return <button style={{background: color}} onClick={handleClickbutton}>{isOff ? "OFF" : "ON"}</button>;
// }

// export default Toggle;
import React, { useState } from 'react';

function Toggle() {
  const [isOff, setIsOff] = useState("OFF"); // Initial state is "OFF"

  function handleClickButton() {
    setIsOff((prevState) => (prevState === "OFF" ? "ON" : "OFF")); // Toggle between "OFF" and "ON"
  }

  const color = isOff === "OFF" ? "Red" : "White";

  return <button style= {{background: color}} onClick={handleClickButton}>{isOff}</button>;
}

export default Toggle;
