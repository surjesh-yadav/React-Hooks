import React, { useState, useEffect } from "react";
function UseEffect() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(50);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleDecreament = () => {
    setCount1(count1 - 1);
  };
  //useEffect call When 👇👇
  //componentDidMount
  //compopnentsDidUpdate
  //componentWillUnmount
  useEffect(() => {
    console.log("UseEffect Called");
  }, [count1]);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>Increase</button>

      <h1>Count:{count1}</h1>
      <button onClick={handleDecreament}>Decrease</button>
    </div>
  );
}
export default UseEffect;
