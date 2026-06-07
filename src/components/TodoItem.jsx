export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <li className={`todo-item ${todo.status ? "completed" : ""}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.status}
          onChange={() => onToggle(todo.id)}
        />
        <span className="todo-title">{todo.title}</span>
      </div>
      <div className="todo-actions">
        <button className="edit-btn" onClick={() => onEdit(todo.id)}>
          ✏️
        </button>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>
          🗑️
        </button>
      </div>
    </li>
  );
}
