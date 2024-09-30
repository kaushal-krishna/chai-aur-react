import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="flex mt-4 justify-between items-center bg-gray-300 dark:bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-black dark:text-white">{todo.text}</div>
            <button
              className="text-white bg-red-500 border-0 py-1 px-4 foxus:outline-none hover:bg-red-600 rounded text-md"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              &nbsp;X
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default Todos;
