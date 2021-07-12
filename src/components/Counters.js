import Counter from "./Counter";
import { useState } from "react";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleIncrement = (counter) => {
    const counts = [...counters];
    const index = counters.indexOf(counter);
    counts[index] = { ...counter };
    counts[index].value++;

    setCounters(counts);
  };

  const handleReset = () => {
    setCounters(
      counters.map((counter) => {
        counter.value = 0;
        return counter;
      })
    );
  };

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
    // console.log(id);
  };

  return (
    <div>
      <button
        key={counters.id}
        onClick={handleReset}
        className="btn btn-primary  m-2"
      >
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
