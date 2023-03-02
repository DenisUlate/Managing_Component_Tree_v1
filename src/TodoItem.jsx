import React, { useState } from "react";

function TodoItem(props) {
  const [completed, setCompleted] = useState(false);

  function handleToggleCompleted() {
    setCompleted(!completed);
  }

  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : "none",
        cursor: "pointer"
      }}
      onClick={handleToggleCompleted}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
