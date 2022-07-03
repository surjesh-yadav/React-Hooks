import React, { useState, useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);
  const handleInput = () => 
  {
    console.log("Function cell");
    inputRef.current.value = "Surjesh Yadav"
    inputRef.current.focus()
    inputRef.current.style.color= "red"
    // inputRef.current.style.display= "none"

  };
  return (
    <div>
      <h1>useRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Handle Input</button>
    </div>
  );
}

export default UseRef;
