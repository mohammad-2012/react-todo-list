export default function EditIcon({ setEditId, id, todos, setInputValue }) {
  const editBtnTodo = () => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setInputValue(todoToEdit.title);
      setEditId(id);
    }
  };

  return (
    <button className="edit-btn" onClick={editBtnTodo}>
      Edit
    </button>
  );
}
