import React, { useLayoutEffect, useEffect, useState } from "react";

function UseLayoutEffect() {
  const [text, setText] = useState("Surjesh");
  const [loading, setLoading] = useState(false);

  //useLayoutEffect hook
  ////// useLayoutEffect hook is invoked before dom is painted
  //   useLayoutEffect(() => {
  //     console.log("useLayoutEffect Called");
  //     if (!loading) {
  //       setText("Hello code Improve");
  //     } else {
  //       setText("Welcome");
  //     }
  //   });
  
  //useEffect hook
  // useEffect hook is invoked after dom is painted
  // If both will on then useLayoutEffect will work
  useEffect(() => {
    console.log("useEffect Called");
    if (!loading) {
      setText("Hello code Improve");
    } else {
      setText("Welcome");
    }
  });

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default UseLayoutEffect;
