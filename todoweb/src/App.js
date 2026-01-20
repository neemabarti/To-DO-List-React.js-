import { useReducer, useEffect, useState } from "react";
import "./App.css";

import { todoReducer } from "./reducer/todoreducer";
import { loadTodos, saveTodos } from "./utils/storage";

import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, [], loadTodos);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ACTIVE") return !todo.completed;
    if (filter === "COMPLETED") return todo.completed;
    return true;
  });

  const addTodo = (e) => {
    e.preventDefault();

    const text = e.target.todo.value.trim();
    if (!text) return;

   dispatch({
  type: "ADD_TASK",
  payload: {
    id: Date.now(),
    text,
    completed: false,
    createdAt: new Date().toISOString(), 
  },
});



    e.target.reset();
  };

  return (
    <div className="page">
      <div className="app-card App">
        <h1>To-Do List</h1>

        <form onSubmit={addTodo} className="todo-form">
          <input
            name="todo"
            placeholder="Enter task"
            autoComplete="off"
          />
          <button type="submit">Add</button>
        </form>

        <Filters
          filter={filter}
          setFilter={setFilter}
          onClear={() => dispatch({ type: "CLEAR_COMPLETED" })}
        />

        <TodoList todos={filteredTodos} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
