export default function TodoInput({
  inputValue,
  setInputValue,
  onSubmit,
  isEditing,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Write your task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
      <button type="submit" className="submit-btn">
        {isEditing ? "✏️ Update" : "➕ Add"}
      </button>
    </form>
  );
}
