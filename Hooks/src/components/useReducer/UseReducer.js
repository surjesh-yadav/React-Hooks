import React, { useState, useReducer } from "react";

// useState hook for manage a state
// useReducer hook for manage many hooks
const intialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  if(action.type === "INCREAMENT"){
    return state+1;
  }
  else if(action.type === "DECREAMENT"){
    return state-1
  }
  else{
    return state="You Clicked Wrong Button"
  }
  return state;
};

function UseReducer() {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <div>
        <p>{state}</p>
        <div>
          <button onClick={() => dispatch({ type: "INCREAMENT" })}>Inc</button>
          <button onClick={() => dispatch({ type: "DECREAMENT" })}>Dec</button> <br />
          <button onClick={() => dispatch({ type: "Unknown" })}>Click</button>
        </div>
      </div>
    </>
  );
}

export default UseReducer;
