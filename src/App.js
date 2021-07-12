import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
import { useState } from "react";
function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const handleDecrement = (counter) => {
    const counts = [...counters];
    const index = counters.indexOf(counter);
    counts[index] = { ...counter };
    counts[index].value--;

    setCounters(counts);
  };

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
    <div className="App">
      <Navbar
        totalCounters={counters.filter((counter) => counter.value > 0).length}
      />
      <main className="container">
        <Counters
          key={counters.id}
          counters={counters}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
          onReset={handleReset}
          onDecrement={handleDecrement}
        />
      </main>
    </div>
  );
}

export default App;
