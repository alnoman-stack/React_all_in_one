import React, { useState } from "react";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const EventChange = (event) => {
    setItem(event.target.value);
  };
  const HandleClick = () => {
    setNewItem((oldItem) => {
      return [...oldItem, item];
    });
    setItem("");
  };

  const DeleteItem = (id) => {
    console.log("deleted");

    setNewItem((oldItem) => {
      return oldItem.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="Add an item"
            value={item}
            onChange={EventChange}
          />
          <button className="btn" onClick={HandleClick}>
            +
          </button>
          <ol>
            {newItem.map((itemValue, index) => {
              return (
                <TodoList
                  text={itemValue}
                  key={index}
                  id={index}
                  onSelect={DeleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
