export default function TodoCheckbox({ status, id, setCount }) {
  const handleCheck = () => {
    setCount(prev => prev.map(todo =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    ));
  };

  return (
    <input
      type="checkbox"
      className={`todo-checkbox ${status ? "checked" : ""}`}
      checked={status}
      onChange={handleCheck}
    />
  );
}