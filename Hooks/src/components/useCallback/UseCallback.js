import React, { useCallback, useState } from "react";
import UseCallbackTodo from "./UseCallbackTodo";
function UseCallback() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState(10);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSettodo = () => {
    setTodo( todo-1);
  };
  const handleNewTodo = useCallback(() => {
    console.log("Adding New Todo");
    //Array Merge Operation
  }, [todo]); // recreate kb krna h
  return (
    <div>
      <h1>useCallback</h1>
      <UseCallbackTodo todo={todo} addNewTodo={handleNewTodo} />
      <h3>Count is : {count}</h3>
      <h3>Todo is : {todo}</h3>
      <button onClick={handleIncrement}>Increase Value</button>
      <button onClick={handleSettodo}> Todo</button>
    </div>
  );
}
export default UseCallback;
