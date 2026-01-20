import TodoTask from "./TodoTask";

export default function TodoList({ todos, dispatch }) {
  if (todos.length === 0) {
    return <p>No tasks yet</p>;
  }

  return (
    <ul>
      {todos.map((task) => (
        <TodoTask
          key={task.id}
          task={task}
          onDelete={(id) =>
            dispatch({ type: "DELETE_TASK", payload: id })
          }
          onToggle={(id) =>
            dispatch({ type: "TOGGLE_TASK", payload: id })
          }
          onUpdate={(id, text) =>
            dispatch({
              type: "UPDATE_TASK",
              payload: { id, text },
            })
          }
        />
      ))}
    </ul>
  );
}
