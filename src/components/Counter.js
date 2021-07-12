const Counter = (props) => {
  const getBadgeClasses = () => {
    let classes = " m-2 badge bg-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    return props.counter.value === 0 ? "Zero" : props.counter.value;
  };

  return (
    <div className="row">
      <div className="col-1">
        <span className={getBadgeClasses()}>{formatCount()}</span>
      </div>
      <div className="col">
        <button
          onClick={() => props.onIncrement(props.counter)}
          className="btn btn-secondary btn-sm "
        >
          +
        </button>

        <button
          onClick={() => props.onDecrement(props.counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={props.counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>

        <button
          onClick={() => props.onDelete(props.counter.id)}
          className="btn btn-danger btn-sm "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Counter;
