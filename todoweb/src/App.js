import "./App.css";
import { useState } from "react";

function App() {
  const [todolist, setTodolist] = useState([]);

  const saveTodolist = (event) => {
    event.preventDefault();
    const toname = event.target.toname.value.trim();
    if (!toname) return;

    if (!todolist.includes(toname)) {
      setTodolist([...todolist, toname]);
    } else {
      alert("Task already exists");
    }

    event.target.reset();
  };

  const deleteItem = (itemToDelete) => {
    setTodolist(todolist.filter((item) => item !== itemToDelete));
  };

  return (
    <div className="App">
      <h1>TO-DO LIST APP</h1>

      <form onSubmit={saveTodolist}>
        <input type="text" name="toname" placeholder="Enter task here" />
        <button type="submit">Add</button>
      </form>

      {/* IMPORTANT: outerdiv wrapper */}
      <div className="outerdiv">
        <ul>
          {todolist.map((value) => (
            <TodolistItem
              key={value}
              value={value}
              onDelete={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

/* UPDATED TODO ITEM */
function TodolistItem({ value, onDelete }) {
  return (
    <li className="todo-item">
      <span className="bullet">•</span>
      <span className="task-text">{value}</span>
      <span className="delete-btn" onClick={() => onDelete(value)}>
        ×
      </span>
      
    </li>
  );
}







