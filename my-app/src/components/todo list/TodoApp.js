import React, { useState } from "react";

import Todolist from "./todolist";
import "./todoapp.css";

const TodoApp = () => {
  const [inputList, setInputList] = useState("buy apple");
  const [items, setItems] = useState([]);

  const EventChange = (event) => {
    setInputList(event.target.value);
  };

  const ListOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const DeletItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={inputList}
            placeholder="Add an item"
            onChange={EventChange}
          />
          <button onClick={ListOfItems}>+</button>

          <ol>
            {items.map((itemVal, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={DeletItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
