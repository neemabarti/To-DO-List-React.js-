export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      if (state.some((t) => t.text === action.payload.text)) {
        return state; 
      }
      return [...state, action.payload];

    case "DELETE_TASK":
      return state.filter((t) => t.id !== action.payload);

    case "TOGGLE_TASK":
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );

    case "UPDATE_TASK":
      return state.map((t) =>
        t.id === action.payload.id
          ? { ...t, text: action.payload.text }
          : t
      );

    case "CLEAR_COMPLETED":
      return state.filter((t) => !t.completed);

    default:
      return state;
  }
};
