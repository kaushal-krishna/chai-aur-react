import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form className="flex mt-12" onSubmit={addTodoHandler}>
    <input
      type="text"
      placeholder="Write Todo..."
      className="w-full border border-gray-300 rounded-l-md px-4 py-2 bg-gray-100 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white focus:outline-none"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="rounded-r-md px-5 py-2 bg-green-500 text-white hover:bg-green-600 focus:outline-none"
    >
      Add
    </button>
  </form>
  
  );
}

export default AddTodo;
