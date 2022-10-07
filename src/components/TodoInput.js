import { useState } from "react";

const TodoInput = ({ setTodos }) => {
  const [todoInput, setTodoInput] = useState("");
  const addTodo = () => {
    //edge case: input is empty string or white space, we do not add them to the list.
    if (!todoInput.trim()) {
      setTodoInput("");
      return;
    }

    const newTodo = {
      content: todoInput,
      isCompleted: false,
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
    setTodoInput("");
  };
  return (
    <div>
      <input
        type="text"
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <button onClick={addTodo} className="btn-normal">
        Add To do Item
      </button>
    </div>
  );
};
export default TodoInput;
