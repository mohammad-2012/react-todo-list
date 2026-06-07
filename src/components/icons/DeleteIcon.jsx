export default function DeleteIcon({ setCount, id }) {
  const deleteBtnTodo = () => {
    setCount((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <button className="delete-btn" onClick={deleteBtnTodo}>
      Delete
    </button>
  );
}
