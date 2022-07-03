//UseEffect poore component ke re render ko rokta h
// useMemo kisi component ke chhote se part ko rokta h

import React, { useEffect, useMemo, useState } from "react";

function EffectVsMemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const usememo = useMemo(() => {
    return (
      <div>
        <h1 style={{ color: "red" }}>
          No render again {count}.......{name}
        </h1>
        <h1 style={{ color: "red" }}> useEffect vs useMemo</h1>
      </div>
    );
  }, [name]);
  return (
    <div>
      {usememo}
      <h1 style={{ color: "green" }}>Render it again and again {count}</h1>
      <h1 style={{ color: "green" }}>useEffect vs useMemo</h1>

      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setName("Surjesh Yadav")}>Name</button>
    </div>
  );
}

export default EffectVsMemo;
