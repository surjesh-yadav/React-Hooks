import React, { useState } from "react";

function Custom() {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount(count + 1);
  };

  return {
    count,
    handleIncreament,
  };
}

export default Custom;
