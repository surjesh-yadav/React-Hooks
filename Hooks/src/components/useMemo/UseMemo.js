
import React, { useMemo, useState } from "react";
function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  const multicountMemo = useMemo(
    function multicount() {
      console.log("Multicount");
      return count * 5;
    },
    [count]
  );
  return (
    <div className="App">
      <h1>UseMemo</h1>
      <h2>Count: {count}</h2>
      <h3>Item: {item}</h3>
      <h2>{multicountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </div>
  );
}
export default UseMemo;
