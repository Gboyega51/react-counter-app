import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const getBadgeClasses = () => {
    let classes = " m-2 badge bg-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };
  return (
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button onClick={handleIncrement} className="btn btn-secondary btn-sm">
        Increment
      </button>
    </div>
  );
};

export default Counter;
