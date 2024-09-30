import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload;
      if (action.payload === "light") {
        document.querySelector("html").classList.remove("dark");
      } else {
        document.querySelector("html").classList.add("dark");
      }
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
