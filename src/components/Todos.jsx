import { useState } from "react";
import TodoList from "./TodoList";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const submitNewTodoForm = (e) => {
    e.preventDefault();
    const newTitle = inputValue.trim();
    if (!newTitle) return;

    if (editId) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, title: newTitle } : todo,
        ),
      );
      setEditId(null);
    } else {
      setTodos((prev) => [
        ...prev,
        { title: newTitle, status: false, id: Date.now() },
      ]);
    }

    setInputValue("");
  };

  return (
    <div className="todos">
      <form className="input-section" onSubmit={submitNewTodoForm}>
        <input
          type="text"
          id="todo-input"
          className="todo-input"
          placeholder="Add a new task..."
          autoComplete="off"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" id="add-btn" className="add-btn">
          {editId ? "Update Task" : "Add Task"}
        </button>
      </form>

      {/* TODO List */}
      <TodoList
        todos={todos}
        setCount={setTodos}
        setEditId={setEditId}
        setInputValue={setInputValue}
      />
    </div>
  );
}
