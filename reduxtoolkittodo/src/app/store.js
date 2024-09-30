import { configureStore } from "@reduxjs/toolkit";

// Import Todo reducers for methods registration
import todoReducer from "../features/todo/todoSlice";
import themeReducer from "../features/theme/themeSlice";

// Configure Store from Redux toolkit
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  }, // Regsistration of methods
});
