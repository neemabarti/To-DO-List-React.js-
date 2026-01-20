export default function Filters({ filter, setFilter, onClear }) {
  return (
    <div className="filters">
<button
  className={filter === "ALL" ? "active" : ""}
  onClick={() => setFilter("ALL")}
>
  All
</button>      
      <button onClick={() => setFilter("ACTIVE")}>Active</button>
      <button onClick={() => setFilter("COMPLETED")}>Completed</button>
      <button onClick={onClear}>Clear Completed</button>
    </div>


  );
}


