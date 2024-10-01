import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const [editTodoId, setEditTodoId] = useState(null);
  const [editText, setEditText] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleEditClick = (todo) => {
    if (editTodoId === todo.id) {
      dispatch(updateTodo({ id: todo.id, text: editText }));
      setEditTodoId(null);
    } else {
      setEditText(todo.text);
      setEditTodoId(todo.id);
    }
  };

  return (
    <div>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex mt-4 justify-between items-center bg-zinc-200 dark:bg-zinc-800 px-6 py-4 rounded-lg"
        >
          <input
            type="text"
            className={`text-black dark:text-white bg-transparent p-3 text-xl rounded-lg w-96 border outline-none ${
              editTodoId === todo.id ? "border-zinc-400" : "border-transparent"
            } transition-all duration-300 ease-in-out focus:border-zinc-400`}
            value={editTodoId === todo.id ? editText : todo.text}
            disabled={editTodoId !== todo.id}
            onChange={(e) => setEditText(e.target.value)}
          />

          <div className="flex justify-between items-center w-40 space-x-4">
            <button
              className={`text-white ${
                editTodoId === todo.id ? "bg-green-600" : "bg-blue-600"
              } ${
                editTodoId === todo.id
                  ? "hover:bg-green-700"
                  : "hover:bg-blue-700"
              } border-0 py-2 px-5 focus:outline-none  rounded-lg text-md transition-colors duration-300 ease-in-out`}
              onClick={() => handleEditClick(todo)}
            >
              {editTodoId === todo.id ? "Save" : "Edit"}
            </button>
            <button
              className="text-white bg-red-600 border-0 py-2 px-5 focus:outline-none hover:bg-red-700 rounded-lg text-md transition-colors duration-300 ease-in-out"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Todos;
