export default function TodoStats({ stats, filter, setFilter }) {
  const filters = [
    { key: "all", label: "All", count: stats.total },
    { key: "active", label: "Active", count: stats.active },
    { key: "completed", label: "Done", count: stats.completed },
  ];

  return (
    <div className="stats-bar">
      <div className="stats-info">
        <span className="stats-badge">{stats.active} active</span>
        <span className="stats-badge">{stats.completed} completed</span>
      </div>
      <div className="filter-buttons">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`filter-btn ${filter === f.key ? "active" : ""}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label} {f.key !== "all" && `(${f.count})`}
          </button>
        ))}
      </div>
    </div>
  );
}
