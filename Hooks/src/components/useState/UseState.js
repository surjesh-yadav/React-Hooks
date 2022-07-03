import React, { useEffect, useState } from "react";
function UseState() {
  const [name, setName] = useState("Surjesh");
  const [roll, setRoll] = useState(101);
  const handleClick = () => {
    setName("Yadav");
    setRoll(100);
  };
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Roll:{roll}</h2>
      <button onClick={handleClick}>Change</button>
    </div>
  );
}
export default UseState;

