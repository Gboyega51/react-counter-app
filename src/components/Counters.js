import Counter from "./Counter";

const Counters = (props) => {
  return (
    <div>
      <button
        key={props.counters.id}
        onClick={props.onReset}
        className="btn btn-primary  m-2"
      >
        Reset
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={props.onIncrement}
          onDelete={props.onDelete}
          onDecrement={props.onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
