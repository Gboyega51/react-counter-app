const Counter = ({ onDelete, counter, onIncrement }) => {
  const getBadgeClasses = () => {
    let classes = " m-2 badge bg-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  return (
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => onIncrement(counter)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
