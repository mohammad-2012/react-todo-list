import EditIcon from "./icons/EditIcon";
import DeleteIcon from "./icons/DeleteIcon";
import TodoCheckbox from "./icons/TodoCheckbox";

export default function TodoListItem({
  title,
  status,
  id,
  todos,
  setCount,
  setEditId,
  setInputValue,
}) {
  return (
    <li className="todo-item">
      <div className="todo-content">
        <TodoCheckbox status={status} />
        <label className="todo-text">{title}</label>
      </div>
      <div className="todo-actions">
        <EditIcon
          id={id}
          todos={todos}
          setEditId={setEditId}
          setInputValue={setInputValue}
        />
        <DeleteIcon id={id} setCount={setCount} />
      </div>
    </li>
  );
}
