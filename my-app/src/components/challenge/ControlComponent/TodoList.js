import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          onClick={() => {
            props.onSelect(props.id);
            console.log(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default TodoList;
