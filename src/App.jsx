import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoStats from "./components/TodoStats";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./Styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  const addOrUpdateTodo = (title) => {
    if (editId) {
      setTodos((prev) =>
        prev.map((todo) => (todo.id === editId ? { ...todo, title } : todo)),
      );
      setEditId(null);
    } else {
      setTodos((prev) => [
        ...prev,
        {
          title,
          status: false,
          id: Date.now(),
          createdAt: new Date().toISOString(),
        },
      ]);
    }
    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleStatus = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo,
      ),
    );
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setInputValue(todoToEdit.title);
      setEditId(id);
    }
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.status));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.status;
    if (filter === "completed") return todo.status;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.status).length,
    active: todos.filter((t) => !t.status).length,
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <TodoInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSubmit={addOrUpdateTodo}
          isEditing={!!editId}
        />
        <TodoStats stats={stats} filter={filter} setFilter={setFilter} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleStatus}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
        {stats.completed > 0 && (
          <button className="clear-btn" onClick={clearCompleted}>
            Clear Completed
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}
