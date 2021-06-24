import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [over, setOver] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const handleClick = () => {
    setItems((prevValue) => {
      return [...prevValue, text];
    });
    setText("");
  };

  const handleOver = () => {
    setOver(true);
  };

  const handleOut = () => {
    setOver(false);
  };

  const deleteItem = (id) => {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index != id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleClick}>
          <span
            onMouseOver={handleOver}
            onMouseOut={handleOut}
            style={{ backgroundColor: over ? "#fdcb6e" : null }}
          >
            Add
          </span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              id={index}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
