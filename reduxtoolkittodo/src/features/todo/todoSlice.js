import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(10), text: "Hello World" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // All functions/methods have two parameters inbuilt state and action
    listTodos: (state, action) => {
      state.todos = action.payload;
    },

    addTodo: (state, action) => {
      const todo = { id: nanoid(10), text: action.payload };
      if (todo.text) {
        state.todos.unshift(todo);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      // Traditional way
      state.todos = state.todos.map(
        (todo) => (todo.text = todo.id === id ? { ...todo, text: text } : todo)
      );

      // Recommended way
      // const foundTodo = state.todos.find((todo) => todo.id === id);
      // if (foundTodo) {
      //   foundTodo.text = text;
      // }
    },
  },
});

export const { listTodos, addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
