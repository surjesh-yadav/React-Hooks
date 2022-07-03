import React, { memo } from "react";
function UseCallbackTodo({todo, addNewTodo}) {
  console.log("TodoList");
  return (
    <div>
      <h1>To Do List</h1>
    </div>
  );
}

export default memo(UseCallbackTodo); //ye child ki reRender ko rok deta hai
