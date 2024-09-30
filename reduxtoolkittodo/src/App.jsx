import { useEffect } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "./features/theme/themeSlice";
import { listTodos } from "./features/todo/todoSlice";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      dispatch(listTodos(JSON.parse(localTodos)));
    }

    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      dispatch(setTheme(localTheme));
    }
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-between">
        <h1 className="text-5xl text-black dark:text-white">
          Save and Edit Todos
        </h1>
        <button
          className="text-white dark:text-black bg-orange-500 dark:bg-orange-600 px-4 py-2 hover:bg-orange-600 dark:hover:bg-orange-700 rounded-full"
          onClick={() =>
            dispatch(setTheme(theme === "light" ? "dark" : "light"))
          }
        >
          Switch Theme {theme === "light" ? "🌚" : "🌞"}
        </button>
      </div>
      <div>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
